import { defineConfig } from 'vite';
// import reactPlugin from '@vitejs/plugin-react';

const libName = 'identityFactory';

export default defineConfig({
  plugins: [
    // reactPlugin(),
  ],
  build: {
    lib: {
      entry: `./src/${libName}.ts`,
      name: libName,
      fileName: (format) => `${libName}.${format}.js`,
    },
    rollupOptions: {
      // NOTE: external dependencies to ignore from library
      // external: ['react'],
      // output: {
      //   globals: {
      //     react: 'React',
      //   },
      // },
    },
  },
});
