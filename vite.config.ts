import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use relative base in production builds so dist works via file://
  // Preserve GitHub Pages support via env var when building in CI
  base:
    mode === 'production'
      ? (process.env.GITHUB_REPOSITORY
          ? `/${process.env.GITHUB_REPOSITORY.split("/").pop()}/`
          : './')
      : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
