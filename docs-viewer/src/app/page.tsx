import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <main className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Algorand Documentation Viewer</h1>

        <div className="prose dark:prose-invert">
          <p className="text-lg">
            A documentation viewer that syncs and displays documentation from
            various Algorand GitHub repositories in one centralized location.
          </p>
        </div>
      </main>
    </div>
  );
}
