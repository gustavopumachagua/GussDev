module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: "Kurale",
      body: "Kurale",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      content: {
        portfolio: 'url("/src/assets/outline-text/portfolio.svg")',
        contact: 'url("/src/assets/outline-text/contact.svg")',
        about: 'url("/src/assets/outline-text/about.svg")',
      },
      colors: {
        primary: "#050402",
        secondary: "#1C1D24",
        tertiary: "#131419",
        /*LIGHT*/
        LightNavBar: "#FFFFFF",
        LightBody: "#FFFFFF",
        LightFooter: "#FFFFFF",
        LightButton: "#E5E5E5",
        LightText: "#767676",
        LightRedes: "#213547",
        DarkMode: "#4EC0FF",
        /*Dark*/
        DarkNavBar: "#242424",
        DarkBody: "#242424",
        DarkFooter: "#242424",
        DarkButton: "#484848",
        DarkText: "#E4E4E4",
        DarkRedes: " #E2E2E2",
        Button: "#747BFF",
        accent: {
          DEFAULT: " #484848",
          hover: "#878e99",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [],
};
