declare module "eslint-config-next/core-web-vitals" {
  import type { Linter } from "eslint";
  const config: Linter.Config[];
  export default config;
}

declare module "eslint-config-next/typescript" {
  import type { Linter } from "eslint";
  const config: Linter.Config[];
  export default config;
}

declare module "eslint-config-prettier/flat" {
  import type { Linter } from "eslint";
  const config: Linter.Config;
  export default config;
}

declare module "eslint/config" {
  import type { Linter } from "eslint";
  export function defineConfig(config: Linter.Config[]): Linter.Config[];
  export function globalIgnores(patterns: string[]): Linter.Config;
}
