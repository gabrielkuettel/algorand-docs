'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface DocTreeNode {
  name: string;
  path: string;
  children: { [key: string]: DocTreeNode };
  isFile: boolean;
}

interface DocsSidebarProps {
  docs: string[];
}

function buildDocTree(docs: string[]): DocTreeNode {
  const root: DocTreeNode = { name: '', path: '', children: {}, isFile: false };

  docs.forEach((doc) => {
    const parts = doc.split('/');
    let current = root;

    parts.forEach((part, index) => {
      const isLast = index === parts.length - 1;
      const path = parts.slice(0, index + 1).join('/');

      if (!current.children[part]) {
        current.children[part] = {
          name: part,
          path: path,
          children: {},
          isFile: isLast,
        };
      }
      current = current.children[part];
    });
  });

  return root;
}

function TreeNode({ node, level = 0 }: { node: DocTreeNode; level?: number }) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = Object.keys(node.children).length > 0;

  if (node.name === '') return null;

  const href = node.isFile ? `/docs/${node.path}`.replace(/\.md$/, '') : '#';
  const isActive = pathname === href;

  return (
    <li>
      <div
        className="flex items-center py-1"
        style={{ paddingLeft: `${level * 1.25}rem` }}
      >
        {hasChildren && !node.isFile && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isExpanded ? '▼' : '▶'}
          </button>
        )}
        {node.isFile ? (
          <Link
            href={href}
            className={`${!hasChildren && 'ml-6'} hover:text-blue-600 ${
              isActive ? 'text-blue-600 font-medium' : ''
            }`}
          >
            {node.name.replace(/\.md$/, '')}
          </Link>
        ) : (
          <span className="ml-2 font-medium">{node.name}</span>
        )}
      </div>
      {hasChildren && isExpanded && (
        <ul>
          {Object.values(node.children)
            .sort((a, b) => {
              if (a.isFile !== b.isFile) return a.isFile ? 1 : -1;
              return a.name.localeCompare(b.name);
            })
            .map((child) => (
              <TreeNode key={child.path} node={child} level={level + 1} />
            ))}
        </ul>
      )}
    </li>
  );
}

export default function DocsSidebar({ docs }: DocsSidebarProps) {
  const docTree = buildDocTree(docs);

  return (
    <nav className="py-4">
      <ul className="space-y-1">
        {Object.values(docTree.children)
          .sort((a, b) => {
            // Directories first, then files
            if (a.isFile !== b.isFile) return a.isFile ? 1 : -1;
            return a.name.localeCompare(b.name);
          })
          .map((node) => (
            <TreeNode key={node.path} node={node} />
          ))}
      </ul>
    </nav>
  );
}
