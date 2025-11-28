import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./", // Important: relative path for Vercel deployment
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false
  },
  server: {
    host: true,
    port: 5173
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
