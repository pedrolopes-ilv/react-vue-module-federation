import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
// @ts-ignore
import veauryVitePlugins from "veaury/vite/index.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "vue3App",
      remotes: {
        reactApp: "./node_modules/react-remote-app/dist/assets/reactButton.js",
      },
      shared: ["react", "react-dom"],
    }),
    veauryVitePlugins({
      type: "vue"
    })
  ],
});
