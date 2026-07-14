import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "var(--bone)",
        ink: "var(--ink)",
        cobalt: "var(--cobalt)",
        peach: "var(--peach)",
        line: "var(--line)",
        muted: "var(--muted)",
        paragraph: "var(--paragraph)",
      },
      fontFamily: {
        display: "var(--disp)",
        body: "var(--body)",
        mono: "var(--mono)",
      },
    },
  },
  plugins: [],
};

export default config;
