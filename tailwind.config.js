/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				DEFAULT: '95%',
				md: '75rem',
				//lg: '75rem'
			}
		},
		extend: {
			colors: {
				'SG-blue-primary': '#0065bd',
				'SG-grey-primary': '#333333',
				'SG-grey-hint': '#727272',
				'SG-error': '#d32205',
				'SG-hover-background': '#d9effc',
				'SG-hover': '#00437e',
				'SG-focus': '#fdd522'
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			},
			fontSize: {
				'SG-h1-lg': '2.75rem',
				'SG-h1-sm': '1.875rem',
				'SG-h2-lg': '1.875rem',
				'SG-h2-sm': '1.375rem',
				'SG-h3-lg': '1.375rem',
				'SG-h3-sm': '1.1875rem',
				'SG-body-lg': '1.1875rem',
				'SG-body-sm': '1rem'
			},
			lineHeight: {
				'SG-h1-lg': '3.5rem',
				'SG-h1-sm': '2.5rem',
				'SG-h2-lg': '2.5rem',
				'SG-h2-sm': '2rem',
				'SG-h3-lg': '2rem',
				'SG-h3-sm': '1.5rem',
				'SG-body-lg': '2rem',
				'SG-body-sm': '1.5rem'
			},
			spacing: {
				1: '0.5rem',
				2: '1rem',
				3: '1.5rem',
				4: '2rem',
				'4a': '1.5rem',
				5: '2.5rem',
				'5a': '2rem',
				6: '3rem',
				'6a': '2.5rem',
				7: '3.5rem',
				'7a': '2.5rem',
				8: '4rem',
				'8a': '3rem',
				9: '4.5rem',
				'9a': '3.5rem'
			},
			boxShadow: {
				'black-shadow': '0 4px 0 0 #000000'
			}
		}
	},
	plugins: []
};
