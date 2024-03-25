/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#23BE0A",
        "secondary-color": "#59C6D2",
        "op-color": "#1313130c",
      },
    },
  },
  plugins: [require("daisyui")],
};
