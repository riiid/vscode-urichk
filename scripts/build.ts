import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import { build } from 'esbuild';

(async () => {
  await build({
    plugins: [pnpPlugin()],
    entryPoints: ['src/extension.ts'],
    bundle: true,
    outfile: 'dist/main.js',
    external: ['vscode'],
    format: 'cjs',
    platform: 'node'
  });

  console.info("Build complete!");
})();