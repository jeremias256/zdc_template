/** @type {import('tailwindcss').Config} */
export default {
	content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				'custom-br555': '555px',
			},
			colors: {
				'custom-light-blue': '#698bce',
				'custom-medium-blue': '#4675d2',
				'custom-dark-blue': '#1958d7',
				'custom-red': '#FF006E',
				primary: '#1958d7',
				secondary: '#EDF4FC',
				success: '#25D366',
				warning: '#FF8661',
				text: '#7B828C',
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
