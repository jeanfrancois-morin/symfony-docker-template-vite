import {defineConfig} from "vite";
import symfonyPlugin from "vite-plugin-symfony";

export default defineConfig({
  plugins: [
    //react(), // if you're using React */
    symfonyPlugin({
      stimulus: true
    }),
    {
      name: "custom-hmr",
      enforce: "post",
      // HMR
      handleHotUpdate({file, server}: { file: any, server: any }) {
        if (file.endsWith('.twig')) {
          server.ws.send({type: 'full-reload', path: '*'});
        }
      },
    }
  ],
  build: {
    rollupOptions: {
      input: {
        app: "./assets/app.js"
      },
    },
  },
  // css: {
  //   devSourcemap: true
  // },
  resolve: {
    alias: {
      '@public': '/public',
      '@icons': '/assets/icons',
    },
  },
  server: {
      host: 'localhost',
  }
});
