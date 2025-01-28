'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function MarkdownContent({ content }: { content: string }) {
  const currentPath = usePathname();

  // Handle hash navigation on mount and content change
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [content]);

  const resolveInternalLink = (href: string) => {
    if (!href) return href;

    // Handle absolute paths and external links
    if (href.startsWith('http') || href.startsWith('/')) {
      return href;
    }

    // Get the current directory from the pathname
    const pathParts = currentPath.split('/');
    pathParts.pop(); // Remove the current file

    // Resolve the relative path
    const parts = href.split('/');
    const resolvedParts = [...pathParts];

    parts.forEach((part) => {
      if (part === '..') {
        resolvedParts.pop();
      } else if (part !== '.') {
        resolvedParts.push(part);
      }
    });

    return resolvedParts.join('/').replace(/\.md$/, '');
  };

  return (
    <article className="prose prose-slate prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Add IDs to headings for anchor links
          h1: ({ children, ...props }) => {
            const id =
              typeof children === 'string'
                ? children.toLowerCase().replace(/\s+/g, '-')
                : '';
            return (
              <h1 id={id} {...props}>
                {children}
              </h1>
            );
          },
          h2: ({ children, ...props }) => {
            const id =
              typeof children === 'string'
                ? children.toLowerCase().replace(/\s+/g, '-')
                : '';
            return (
              <h2 id={id} {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ children, ...props }) => {
            const id =
              typeof children === 'string'
                ? children.toLowerCase().replace(/\s+/g, '-')
                : '';
            return (
              <h3 id={id} {...props}>
                {children}
              </h3>
            );
          },
          a: ({ href, children }) => {
            if (!href) return <>{children}</>;

            // Handle pure anchor links
            if (href.startsWith('#')) {
              return (
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = href.slice(1);
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {children}
                </a>
              );
            }

            // Handle external links
            if (href.startsWith('http')) {
              return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              );
            }

            const resolvedPath = resolveInternalLink(href);
            return (
              <Link href={resolvedPath} scroll={false}>
                {children}
              </Link>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
