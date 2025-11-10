import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./packages/**/*.{js,ts,jsx,tsx}",
    "./apps/purrfectsoft-admin-panel/src/app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 9%)",
        "primary-foreground": "hsl(0, 0%, 98%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        "destructive-foreground": "hsl(0, 0%, 98%)",
        secondary: "hsl(0, 0%, 96.1%)",
        "secondary-foreground": "hsl(0, 0%, 9%)",
        accent: "hsl(0, 0%, 96.1%)",
        "accent-foreground": "hsl(0, 0%, 9%)",
        muted: "hsl(0, 0%, 96.1%)",
        "muted-foreground": "hsl(0, 0%, 45.1%)",
        ring: "hsl(0, 0%, 3.9%)",
      },
      borderColor: {
        input: "hsl(0, 0%, 89.8%)",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
