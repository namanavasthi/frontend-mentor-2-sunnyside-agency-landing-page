module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', "sans-serif"],
        fraunces: ['"Fraunces"', "serif"],
      },
      colors: {
        primary: {
          red: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          cyan: {
            desaturated: "hsl(167, 40%, 24%)",
            moderate: "hsl(168, 34%, 41%)",
          },
          blue: "hsl(198, 62%, 26%)",
        },
        neutral: {
          "grayish-blue": "hsl(210, 4%, 67%)",
          "dark-grayish-blue": "hsl(232, 10%, 55%)",
          "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
          "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
          white: "hsl(0, 0%, 100%)",
          "icon-focus": "#979797",
          background: "hsl(34,100%,99%)",
        },
      },
    },
  },
  variants: {
    extend: {
      textTransform: ["hover", "focus"],
    },
  },
  plugins: [],
};
