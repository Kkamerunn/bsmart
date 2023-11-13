import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import VitePluginPostcss from "vite-plugin-postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
