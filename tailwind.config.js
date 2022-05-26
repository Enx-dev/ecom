const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      base: ["16px", "24px"],
      subhead: ["24px", "40px"],
      subhead2: ["32px", "48px"],
      head: ["56px", "72px"],
    },
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          Orange: "hsl(26, 100%, 55%)",
          "Pale-orange": "hsl(25, 100%, 94%)",
        },
        neutral: {
          "dark-blue": "hsl(220, 13%, 13%)",
          "Dark-grayish-blue": " hsl(219, 9%, 45%)",
          "Grayish-blue": "hsl(220, 14%, 75%)",
          "Light-grayish-blue": "hsl(223, 64%, 98%)",
          White: "hsl(0, 0%, 100%)",
          Black: "hsl(0, 0%, 0%)",
        },
      },
    },
  },
  plugins: [],
};
