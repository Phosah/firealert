/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            1: "#1d2530",
          },
          gray: {
            1: "#495259",
          },
          orange: {
            1: "#fe9e25",
            2: "#DC6624",
          },
        },
      },
      fontFamily: {
        PublicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
