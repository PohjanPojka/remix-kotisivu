/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: ["./app/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/input/dist/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat Variable'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(16) alternate, blink .5s infinite"
      }
    },
  },
  darkMode: ["class"],
  plugins: [nextui()],
}

