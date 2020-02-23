import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../themes';
import { GlobalStyle } from './global-style';
import Heading from './Heading';
import Button from './Button';
import Footer from './layout/Footer';
import { useState } from 'react';

const App = () => {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		setTheme(prevTheme =>
			prevTheme === themes.light ? themes.dark : themes.light
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div>
				<Button toggleTheme={toggleTheme} />
				<Heading />
			</div>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
