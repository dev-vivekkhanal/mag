/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent_color: "#0B041B",
      },
      keyframes: {
        "draw-check": {
          "0%": { strokeDasharray: "0,100" },
          "100%": { strokeDasharray: "100,100" },
        },
        "draw-x": {
          "0%": { strokeDasharray: "0,100" },
          "100%": { strokeDasharray: "100,100" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "draw-check": "draw-check 0.5s ease forwards",
        "draw-x": "draw-x 0.5s ease forwards",
        "fade-in": "fade-in 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
