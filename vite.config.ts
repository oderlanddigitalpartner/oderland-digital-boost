/// <reference types="node" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname in ESM context for TypeScript linting and path resolution
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => {
  const plugins = [react()];
  if (mode === "development") {
    try {
      // Load optional dev-only plugin dynamically to avoid type resolution errors
      // when types are not installed in CI/linting environment
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { componentTagger } = require("lovable-tagger");
      plugins.push(componentTagger());
    } catch {
      // ignore if not available
    }
  }
  return {
    base: '/',
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
