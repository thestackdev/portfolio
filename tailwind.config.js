/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background layers
        "bg-primary": "#0a0a0a",
        "bg-secondary": "#141414",
        "bg-tertiary": "#1a1a1a",
        // Text
        "text-primary": "#fafafa",
        "text-secondary": "#a1a1a1",
        "text-muted": "#666666",
        // Accent (Rust orange)
        accent: "#f97316",
        "accent-muted": "#ea580c",
        // Borders
        "border-subtle": "#262626",
        "border-hover": "#404040",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
