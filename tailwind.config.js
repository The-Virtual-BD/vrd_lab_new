/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#3498DB",
				secondary:"#212529",
				mainBg: "#17171A",
				cardBg: "#202428",
				fontclr: "#f9f5f8",
				darkBg: "#2C3E50",
				creamBg: "#E4EBEF",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
