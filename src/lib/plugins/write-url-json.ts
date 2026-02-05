import fs from 'fs';
import path from 'path';
import type { ViteDevServer } from 'vite';

export function writeUrlJsonPlugin() {
  return {
    name: 'write-url-json',
    configureServer(server: ViteDevServer) {
      server.httpServer?.once('listening', () => {
        const { host, port, https } = server.config.server;
        const hostname = host === '0.0.0.0' ? 'localhost' : (host ?? 'localhost');
        const protocol = https ? 'https' : 'http';
        const origin = `${protocol}://${hostname}:${port}/`;

        const dirPath = path.resolve(process.cwd(), 'src/settings/url');
        const outPath = path.join(dirPath, 'url.json');

        fs.mkdirSync(dirPath, { recursive: true });

        fs.writeFileSync(outPath, JSON.stringify({ url: origin }, null, 2), 'utf-8');
        console.log(`[write-url-json] URL escrita em ${outPath}`);
      });
    },
  };
}
