import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";

const config = {
  preprocess: vitePreprocess(),
  // kit: {
  //   alias: {
  //     "@components": path.resolve("src/components")
  //   }
  // }
};

export default config;
