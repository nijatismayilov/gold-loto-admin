const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				primary: "#764A34",
				secondary: "#BCA79D",
				tertiary: "#F2E9D7",
				accent: "#FFFAEF",
			},
		},
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
		},
	},
	plugins: [],
};
