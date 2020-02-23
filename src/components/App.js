import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../context/theme-context';
import Heading from './Heading';
import Button from './Button';
import Footer from './Footer';

const App = () => {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		setTheme(prevTheme =>
			prevTheme === themes.light ? themes.dark : themes.light
		);
	};

	useEffect(() => {
		const { background, color } = theme.body;

		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	});

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div>
				<Button />
				<Heading />
			</div>
			<Footer />
		</ThemeContext.Provider>
	);
};

export default App;
