import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // Configure your color palette here
      primary: "#a6cf98",
    },
  },
  plugins: [],
});
