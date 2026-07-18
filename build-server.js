import esbuild from 'esbuild';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Mark all dependencies as external, EXCEPT edge-tts
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {})
].filter(dep => dep !== 'edge-tts');

console.log('[Build Server] Bundling with external packages:', external);

esbuild.build({
  entryPoints: ['server.ts'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node20',
  sourcemap: true,
  outfile: 'dist/server.cjs',
  external,
}).then(() => {
  console.log('[Build Server] Backend server built successfully into dist/server.cjs!');
}).catch((err) => {
  console.error('[Build Server] Backend server build failed:', err);
  process.exit(1);
});
