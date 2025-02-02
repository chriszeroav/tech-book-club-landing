import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-neutral-900": "#062630",
        "custom-neutral-700": "#385159",
        "custom-neutral-200": "#E6E1DF",
        "custom-neutral-100": "#FAF5F3",
        "custom-neutral-0": "#FFFFFF",
        "custom-light-salmon-500": "#FEA36F",
        "custom-light-salmon-100": "#FFE2D1",
        "custom-light-salmon-50": "#FFF5EF",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(107deg, #FFA960 -11.37%, #062630 61.84%)",
        gradient: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      },
      fontFamily: {
        "martian-mono": "var(--font-martian-mono)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
