import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: /\.(png|jpg|jpeg|gif|svg)$/, // Include image files as assets
  },
})