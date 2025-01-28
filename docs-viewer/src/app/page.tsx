export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <main className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Documentation Downloader</h1>

        <div className="prose">
          <p className="text-lg">
            A utility to download and sync documentation from various Algorand
            GitHub repositories.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Setup</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Clone this repository</li>
            <li>
              Install dependencies:
              <pre className="bg-gray-800 p-2 rounded mt-2">
                npm run install:all
              </pre>
            </li>
            <li>
              Create a <code>.env</code> file in the root directory with your
              GitHub token (required to avoid rate limits)
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
          <p>Run the download script:</p>
          <pre className="bg-gray-800 p-2 rounded">npm run download</pre>
          <p className="mt-2">
            This will download documentation from all sources configured in{' '}
            <code>config.ts</code> to their respective destination folders.
          </p>

          <p className="mt-4">To view the documentation in a browser:</p>
          <pre className="bg-gray-800 p-2 rounded">npm run view</pre>
          <p className="mt-2">
            This will start a local web server at http://localhost:3000 where
            you can browse the downloaded documentation.
          </p>
        </div>
      </main>
    </div>
  );
}
