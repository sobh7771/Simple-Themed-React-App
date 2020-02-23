import React from 'react';

const themes = {
	light: {
		body: { background: 'rgb(226, 226, 226)', color: 'rgb(54, 53, 55)' },
		button: {
			background: ['rgb(57, 89, 138)', 'rgb(121, 215, 237)'],
			borderColor: 'rgba(255, 255, 255)'
		}
	},
	dark: {
		body: { background: 'rgb(54, 53, 55)', color: 'rgb(250, 250, 250)' },
		button: {
			background: ['rgb(9, 18, 54)', 'rgb(30, 33, 93)'],
			borderColor: 'rgba(107, 128, 150)'
		}
	}
};

const ThemeContext = React.createContext({
	theme: {},
	toggleTheme: () => {}
});

export { themes, ThemeContext };
