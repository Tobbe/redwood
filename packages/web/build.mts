import { build, defaultBuildOptions } from '@redwoodjs/framework-tools'

await build({
  buildOptions: {
    ...defaultBuildOptions,
    outdir: 'dist/esm/components',
    format: 'esm',
    bundle: true,
    outExtension: { '.js': '.mjs' },
    entryPoints: ['./src/components/Metadata.tsx'],
  },
})
