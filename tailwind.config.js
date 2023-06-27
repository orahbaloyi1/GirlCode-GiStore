/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-sec": "url('/src/assets/hero-background.jpg')",
      },
      colors: {
        "girlcode-pink": "#e94154",
      },
      icon: {
        starIcon: "url('index.html')",
      },
    },
  },
  plugins: [],
};
