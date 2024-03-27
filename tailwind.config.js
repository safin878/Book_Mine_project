/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#23BE0A",
        "secondary-color": "#59C6D2",
        "op-color": "#1313130c",
        "opp-color": "#1313130D",
        "bt-color": "#328EFF26",
        "bt2-color": "#328EFF",
        "bt3-color": "#FFAC3326",
        "bt4-color": "#FFAC33",
      },
    },
  },
  plugins: [require("daisyui")],
};
