import { spawn } from 'child_process';
import http from 'http';

let serverProcess: any;

function waitForServer(port: number, timeoutMs = 15000): Promise<void> {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      if (Date.now() - startTime > timeoutMs) {
        reject(new Error(`Timeout waiting for server on port ${port}`));
        return;
      }
      // Note: check the /api/health endpoint or any simple api endpoint
      const req = http.get(`http://127.0.0.1:${port}/api/health`, (res) => {
        if (res.statusCode === 200 || res.statusCode === 404) {
          // If 404 or 200, the port is listening, which is sufficient
          resolve();
        } else {
          setTimeout(check, 250);
        }
      });
      req.on('error', () => {
        setTimeout(check, 250);
      });
    };
    check();
  });
}

export async function setup() {
  console.log('🚀 [Global Setup] Starting background Express server on port 3000...');
  
  // We omit VITEST environment variable in the child process so that serveApp() is called.
  const env = { ...process.env };
  delete env.VITEST;

  serverProcess = spawn('npx', ['tsx', 'server.ts'], {
    stdio: 'ignore', // Keep test output clean
    shell: true,
    env: {
      ...env,
      PORT: '3000',
      NODE_ENV: 'development',
    }
  });

  try {
    await waitForServer(3000);
    console.log('✅ [Global Setup] Express server is ready on port 3000!');
  } catch (err) {
    console.error('❌ [Global Setup] Failed to start Express server:', err);
    if (serverProcess) {
      serverProcess.kill('SIGTERM');
    }
    throw err;
  }
}

export function teardown() {
  console.log('🛑 [Global Setup] Shutting down Express server...');
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
  }
}
