type SourceType = 'file' | 'directory';

interface Source {
  type: SourceType;
  url: string;
  destination: string;
  include: string[];
}

interface Config {
  outputDir: string;
  sources: Source[];
}

const defaultIncludes = [
  '**/*.md',
  '**/*.png',
  '**/*.jpg',
  '**/*.jpeg',
  '**/*.gif',
];

const config: Config = {
  outputDir: './docs',
  sources: [
    // Dev Portal - AF Docs
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/devportal/tree/main/src/content/docs',
      destination: 'devportal',
      include: [...defaultIncludes, '**/*.mdx'],
    },
    // Algorand Docs - AT Docs
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/docs/tree/staging/docs',
      destination: 'algorand',
      include: defaultIncludes,
    },
    // TEALScript
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/TEALScript/tree/dev/starlight/src/content/docs',
      destination: 'tealscript',
      include: [...defaultIncludes, '**/*.mdx'],
    },
    // Algokit CLI
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/algokit-cli/tree/main/docs',
      destination: 'algokit-cli',
      include: defaultIncludes,
    },
    // Algokit Utils (TypeScript)
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/algokit-utils-ts/tree/main/docs',
      destination: 'algokit-utils-ts',
      include: defaultIncludes,
    },
    // Algokit Utils (Python)
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/algokit-utils-py/tree/main/docs',
      destination: 'algokit-utils-py',
      include: defaultIncludes,
    },
    // Algokit Client Generator
    {
      type: 'file',
      url: 'https://github.com/algorandfoundation/algokit-client-generator-ts/blob/main/docs/usage.md',
      destination: 'algokit-client-generator-ts',
      include: defaultIncludes,
    },
    // Algokit Subscriber
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/algokit-subscriber-ts/tree/main/docs',
      destination: 'algokit-subscriber-ts',
      include: defaultIncludes,
    },
    // Puya
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/puya/tree/main/docs',
      destination: 'puya',
      include: defaultIncludes,
    },
    // ARCs
    {
      type: 'directory',
      url: 'https://github.com/algorandfoundation/ARCs/tree/main/ARCs',
      destination: 'arcs',
      include: defaultIncludes,
    },
  ],
};

export default config;
