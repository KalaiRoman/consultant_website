/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./ node_modules / flowbite/**/ *.js"],
  theme: {
    extend: {
    },
    screens: {
      "xs": { min: "375px" },
      "xs1": { max: "479px" },
      "sm": { min: "480px" },
      "md": { min: "768px" },
      "lg": { min: "976px" },
      "xl": { min: "1440px" },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

