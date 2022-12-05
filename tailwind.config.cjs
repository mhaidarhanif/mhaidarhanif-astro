const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: '#00aacc',
				primary: colors.cyan,
				secondary: colors.sky,
				rss: '#f26522',
				github: '#333',
				linkedin: '#0a66c2',
				twitter: '#1d9bf0',
				youtube: '#ff0000',
				telegram: '#27a7e7',
				facebook: '#0165e1',
				instagram: '#E1306C',
				devto: '#000',
				hashnode: '#2863ff',
				showwcase: '#111',
				polywork: '#24b278',
				cv: '#008080',
				catamyst: '#0aa',
			},
			fontFamily: {
				sans: ["'RubikVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};

/* 

  Alternative tailwind.config.js
  
  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.cyan,
//         secondary: colors.lime,
//       },
//       fontFamily: {
//         sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
//   darkMode: "class",
// };
