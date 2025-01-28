import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), '..', 'docs');

export function getAllDocs() {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  const files: string[] = [];

  function traverseDir(dir: string) {
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseDir(fullPath);
      } else if (path.extname(item) === '.md') {
        files.push(fullPath.replace(docsDirectory + path.sep, ''));
      }
    });
  }

  traverseDir(docsDirectory);
  return files;
}

export async function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.md`);

  try {
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug: realSlug, meta: data, content };
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return { slug: realSlug, meta: {}, content: 'File not found' };
  }
}
