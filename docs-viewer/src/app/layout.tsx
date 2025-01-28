'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import DocsSidebar from '@/components/DocsSidebar';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [docs, setDocs] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/docs')
      .then((res) => res.json())
      .then((data) => setDocs(data))
      .catch((error) => console.error('Error fetching docs:', error));
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen`}>
        <aside
          className={`${
            isSidebarOpen ? 'w-80' : 'w-12'
          } bg-gray-100 transition-all duration-200 ease-in-out relative`}
        >
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-4 top-4 bg-gray-100 rounded-full p-1 z-10 hover:bg-gray-200"
          >
            {isSidebarOpen ? '◀' : '▶'}
          </button>
          <div
            className={`${
              isSidebarOpen ? 'opacity-100' : 'opacity-0'
            } overflow-y-auto h-full p-4 transition-opacity duration-200`}
          >
            <DocsSidebar docs={docs} />
          </div>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
