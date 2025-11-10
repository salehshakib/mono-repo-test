import type { Config } from "tailwindcss";

import sharedConfig from "./packages/tailwind-config/tailwind.config";

const config: Config = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./packages/**/*.{js,ts,jsx,tsx}",
    "./packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
};

export default config;
