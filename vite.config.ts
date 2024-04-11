import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    minify: "esbuild",
  }, // Provide a valid identifier for the base property.
});
