import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import preact from "@astrojs/preact";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), preact(), vue()]
});