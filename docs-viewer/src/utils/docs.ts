import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), '..', 'docs');

export function getAllDocs() {
  if (!fs.existsSync(docsDirectory)) {
    console.log('Docs directory not found:', docsDirectory);
    return [];
  }

  const files: string[] = [];

  function traverseDir(dir: string) {
    console.log('Traversing directory:', dir);
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        console.log('Found directory:', item);
        traverseDir(fullPath);
      } else if (
        path.extname(item) === '.md' ||
        path.extname(item) === '.mdx'
      ) {
        console.log('Found file:', item);
        files.push(fullPath.replace(docsDirectory + path.sep, ''));
      }
    });
  }

  traverseDir(docsDirectory);
  return files;
}

export async function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.(md|mdx)$/, '');

  // Try both .md and .mdx extensions
  const mdPath = path.join(docsDirectory, `${realSlug}.md`);
  const mdxPath = path.join(docsDirectory, `${realSlug}.mdx`);

  try {
    // Try .md first, then .mdx
    const filePath = fs.existsSync(mdPath) ? mdPath : mdxPath;
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug: realSlug, meta: data, content };
  } catch (error) {
    console.error(`Error reading file ${realSlug}:`, error);
    return { slug: realSlug, meta: {}, content: 'File not found' };
  }
}
