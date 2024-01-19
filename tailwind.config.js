/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        JetBrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        offwhite: "#F4F4F5",
        myBlack: "#3B4041",
        accentColor: "#24527A",
        darkAccentColor: "#82e2c6",
        darkBackground: "#252f42",
      },
      screens: {
        xsm: "100px",
        sm: "300px",
        md: "760px",
        lg: "1080px",
        xlg: "1920px",
        xxlg: "2560px",
        xxxlg: "3840px"
      },
      maxWidth: {
        icon: "32px",
        xIcon: "48px",
        xxIcon: "72px",
        xxxIcon: "112px"
      },
      fontSize: {
        "4.5xl": "2.750rem",
        "5.5lx": "3.50rem"
      },
      height: {
        sectionVh: "91.5vh",
        mobileHeaderVh: "7.5vh",
      },
      minHeight: {
        '90': '90vh',
      }
    },
  },
  plugins: [],
};