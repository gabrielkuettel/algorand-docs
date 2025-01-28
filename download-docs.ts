import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import { minimatch } from 'minimatch';
import config from './config';

const OUTPUT_DIR = './docs';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

interface GithubItem {
  name: string;
  type: 'file' | 'dir';
  path: string;
  html_url: string;
}

class DownloadStats {
  private downloaded: string[] = [];
  private skipped: string[] = [];
  private failed: string[] = [];

  addDownloaded(file: string) {
    this.downloaded.push(file);
  }
  addSkipped(file: string) {
    this.skipped.push(file);
  }
  addFailed(file: string) {
    this.failed.push(file);
  }

  printSummary() {
    console.log('\n=== Download Summary ===');
    console.log(`✅ Successfully downloaded: ${this.downloaded.length} files`);
    console.log(`⏭️  Skipped: ${this.skipped.length} files`);
    console.log(`❌ Failed: ${this.failed.length} files`);

    if (this.failed.length > 0) {
      console.log('\nFailed files:');
      this.failed.forEach((file) => console.log(`- ${file}`));
    }
  }
}

function shouldInclude(filePath: string, includePatterns: string[]): boolean {
  const normalizedPath = filePath.replace(/\\/g, '/');
  return includePatterns.some((pattern) => minimatch(normalizedPath, pattern));
}

function getGithubApiUrl(githubUrl: string): string {
  const [owner, repo, , branch, ...pathParts] = githubUrl
    .replace('https://github.com/', '')
    .split('/')
    .filter(Boolean);

  return `https://api.github.com/repos/${owner}/${repo}/contents/${pathParts.join(
    '/'
  )}?ref=${branch}`;
}

function getRawFileUrl(githubUrl: string): string {
  return githubUrl
    .replace('github.com', 'raw.githubusercontent.com')
    .replace('/blob/', '/');
}

async function downloadFile(
  url: string,
  destination: string,
  includePatterns: string[],
  stats: DownloadStats
): Promise<void> {
  const fileName = path.basename(url);

  if (!shouldInclude(fileName, includePatterns)) {
    console.log(`Skipping: ${fileName}`);
    stats.addSkipped(fileName);
    return;
  }

  const filePath = path.join(destination, fileName);
  const fileExists = await fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);

  console.log(`${fileExists ? 'Updating' : 'Downloading'}: ${fileName}`);

  try {
    const response = await axios.get(getRawFileUrl(url), {
      responseType: 'arraybuffer',
      headers,
    });
    await fs.mkdir(destination, { recursive: true });
    await fs.writeFile(filePath, response.data);
    stats.addDownloaded(fileName);
  } catch (error) {
    console.error(
      `Failed to download ${fileName}:`,
      error instanceof Error ? error.message : String(error)
    );
    stats.addFailed(fileName);
  }
}

async function downloadDirectory(
  url: string,
  destination: string,
  includePatterns: string[],
  stats: DownloadStats
): Promise<void> {
  try {
    const response = await axios.get(getGithubApiUrl(url), { headers });
    await fs.mkdir(destination, { recursive: true });

    const downloadPromises = response.data.map(async (item: GithubItem) => {
      const itemDestination = path.join(destination, item.name);

      if (item.type === 'file') {
        return downloadFile(item.html_url, destination, includePatterns, stats);
      } else if (item.type === 'dir') {
        return downloadDirectory(
          item.html_url,
          itemDestination,
          includePatterns,
          stats
        );
      }
    });

    await Promise.all(downloadPromises);
  } catch (error) {
    console.error(
      `Failed to process ${url}:`,
      error instanceof Error ? error.message : String(error)
    );
  }
}

async function main() {
  try {
    const stats = new DownloadStats();
    const sourcePromises = config.sources.map(async (source) => {
      console.log(`\nProcessing: ${source.url}`);

      const fullDestination = path.join(OUTPUT_DIR, source.destination);

      if (source.type === 'file') {
        return downloadFile(source.url, fullDestination, source.include, stats);
      } else {
        return downloadDirectory(
          source.url,
          fullDestination,
          source.include,
          stats
        );
      }
    });

    await Promise.all(sourcePromises);
    stats.printSummary();
  } catch (error) {
    console.error(
      'Error:',
      error instanceof Error ? error.message : String(error)
    );
  }
}

main();
