import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "reactHost",
      remotes: {
        reactApp: "./node_modules/react-remote-app/dist/assets/reactButton.js",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
});
