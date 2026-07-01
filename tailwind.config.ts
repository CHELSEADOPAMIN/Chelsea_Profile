import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-desktop)",
        foreground: "var(--color-primary)",
        muted: "var(--color-secondary)",
        accent: "var(--color-accent)",
        primary: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-selection-text)"
        },
        secondary: {
          DEFAULT: "var(--bg-window)",
          foreground: "var(--color-primary)"
        },
        border: "var(--color-border)",
        window: "var(--bg-window)",
        selection: "var(--color-accent)"
      },
      fontFamily: {
        body: [
          "var(--font-body)",
          '"Lucida Grande"',
          "Geneva",
          '"Helvetica Neue"',
          "sans-serif"
        ],
        display: ["var(--font-display)", "Geneva", '"Lucida Grande"', "sans-serif"],
        mono: ["var(--font-mono)", "Monaco", '"Courier New"', "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
