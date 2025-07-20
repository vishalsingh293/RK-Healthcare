/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EA580C",
          dark: "#C2410C",
          hover: "#D97706",
        },
        secondary: {
          DEFAULT: "#9A3412",
          light: "#EA580C",
        },
        accent: {
          DEFAULT: "#EA580C",
          light: "#FB923C",
        },
        text: {
          DEFAULT: "#1f2937",
          light: "#6b7280",
        },
        background: "#ffffff",
        "light-bg": "#f9fafb",
        border: "#e5e7eb",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [typography],
};
