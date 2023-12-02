const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // Configure your color palette here
      primary: "#a6cf98",
    },
  },
  plugins: [],
});
