import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // ✅ keeps paths correct for all routes
  build: {
    outDir: "dist", // ✅ required by Vercel
  },
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true, // ✅ ensures refresh works locally
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
