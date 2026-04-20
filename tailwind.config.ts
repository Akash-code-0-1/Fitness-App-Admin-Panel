import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#080d1a",
          secondary: "#0b1120",
          card: "#0f1729",
          elevated: "#131d2e",
          input: "#0d1525",
        },
        border: {
          DEFAULT: "#1a2640",
          light: "#1e2e4a",
          focus: "#00d4ff",
        },
        accent: {
          cyan: "#00d4ff",
          blue: "#2563eb",
          "blue-bright": "#3b82f6",
          green: "#10b981",
          orange: "#f59e0b",
          red: "#ef4444",
          purple: "#7c3aed",
        },
        text: {
          primary: "#ffffff",
          secondary: "#8899bb",
          muted: "#3d5070",
          label: "#5a7090",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;