/** @type {import('tailwindcss').Config} */
export default {
	content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				figtree: ['Figtree', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				'custom-br555': '555px',
			},
			screens: {
				sm: '440px',
				md: '768px',
				lg: '992px',
			},
		},
	},
	plugins: [],
};
