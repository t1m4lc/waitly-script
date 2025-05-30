import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'ShipwaitSnippet',
      fileName: () => `main.js`,
      formats: ['umd'],
    }
  },
});
