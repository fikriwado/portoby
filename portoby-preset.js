const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		extend: {
			screens: {
				'2xl': '1360px',
			},
			colors: {
				'cool-gray': colors.coolGray
			},
			container: {
				center: 'true',
				padding: '1rem',
			},
			fontFamily: {
				'saira': ['Saira', 'sans-serif'],
				'fira-code': ['Fira Code', 'monospace'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
