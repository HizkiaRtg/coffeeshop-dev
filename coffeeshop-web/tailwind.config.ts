import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3183B5",
        secondary: "#F8F7FF",
        dark: "#0E0D18",
        grey: "#80869A",
        lightgrey: "#EEDEF0",
        error: "#FB7181",
        success: "#53D1B6",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
