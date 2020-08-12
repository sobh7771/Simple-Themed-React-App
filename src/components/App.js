import React from 'react';
import { ThemeProvider } from 'styled-components';
// import themes from '../themes';
import { GlobalStyle } from './global-style';
import Header from './Header';
import Button from './Button';
import Footer from './layout/Footer';
import { useState } from 'react';
import themes from '../themes';
import { useEffect } from 'react';

const App = () => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem('theme') || 'light'
	);

	const toggleTheme = () => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
			<GlobalStyle />
			<div>
				<Button toggleTheme={toggleTheme} />
				<Header />
			</div>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
