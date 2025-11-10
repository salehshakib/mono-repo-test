# @repo/tailwind-config

Shared Tailwind CSS configuration for the monorepo.

## Usage

In your app's `tailwind.config.ts`:

```ts
import sharedConfig from "@repo/tailwind-config";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
};

export default config;
```

Don't forget to install Tailwind CSS and add the `@repo/tailwind-config` dependency to your app's `package.json`:

```json
{
  "devDependencies": {
    "@repo/tailwind-config": "workspace:*",
    "tailwindcss": "^3.4.1",
    "postcss": "^8",
    "autoprefixer": "^10"
  }
}
```
