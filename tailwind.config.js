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
				secondary: '#e3e5d7',
				success: '#bdd6d2',
				danger: '#c4594b',
				warning: '#f18052',
				text: '#a5c8ca',
				info: '#586875',
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
				logo2: '32px',
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
