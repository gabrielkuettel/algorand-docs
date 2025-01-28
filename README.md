# Documentation Downloader

A utility script to download and sync documentation from various Algorand GitHub repositories.

## Setup

1. Clone this repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your GitHub token (required to avoid rate limits):

   ```plaintext
   GITHUB_TOKEN=your_github_token_here
   ```

## Usage

Run the download script:

```bash
npm run download
```

This will download documentation from all sources configured in `config.ts` to their respective destination folders.

## Configuration

Sources and their destinations are configured in `config.ts`. Each source can be either a single file or a directory, and includes:

- `type`: Either 'file' or 'directory'
- `url`: GitHub URL to the source
- `destination`: Local destination path
- `include`: Array of glob patterns for files to include
