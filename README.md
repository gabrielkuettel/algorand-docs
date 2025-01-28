# Documentation Downloader

A utility script to download and sync documentation from various Algorand GitHub repositories.

## Setup

1. Clone this repository
2. Install dependencies:

   ```bash
   npm install
   cd docs-viewer && npm install
   ```

3. Create a `.env` file in the root directory and add your GitHub token with default permissions (required to avoid rate limits):

   ```plaintext
   GITHUB_TOKEN=your_github_token_here
   ```

## Usage

Run the download script:

```bash
npm run download
```

This will download documentation from all sources configured in `config.ts` to their respective destination folders.

To view the documentation in a browser:

```bash
npm run view
```

This will start a local web server at http://localhost:3000 where you can browse the downloaded documentation.

## Configuration

The configuration is defined in `config.ts` and consists of:

### Sources

Each source can be either a single file or a directory, and includes:

- `type`: Either 'file' or 'directory'
- `url`: GitHub URL to the source
- `destination`: Relative path within the docs directory
- `include`: Array of glob patterns for files to include

Example configuration:

```typescript
const config = {
  sources: [
    {
      type: 'directory',
      url: 'https://github.com/org/repo/tree/main/docs',
      destination: 'repo-docs', // Will be downloaded to ./docs/repo-docs
      include: ['**/*.md', '**/*.png'],
    },
  ],
};
```
