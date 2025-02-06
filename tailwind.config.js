/** @type {import('tailwindcss').Config} */
export default {
	content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				'custom-br555': '555px',
			},
			colors: {
				primary: '#f6eddc',
				secondary: '#EDF4FC',
				success: '#bdd6d2',
				//danger: '#c4594b',
				warning: '#f18052',
				text: '#586875',
				//info: '#e3e5d7',
				'custom-light-blue': '#698bce',
				'custom-medium-blue': '#4675d2',
				'custom-dark-blue': '#1958d7',
			},
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				figtree: ['Figtree', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			fontSize: {
				base: '15px',
				title: '24px',
				logo: '40px',
			},
			screens: {
				tablet: '640px',
				laptop: '1024px',
				desktop: '1280px',
			},
		},
	},
	plugins: [],
};
