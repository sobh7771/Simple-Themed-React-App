import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import themes from '../themes';

const StyledHeader = styled.h1`
	margin-top: 2rem;
`;

const Header = () => {
	const theme = useContext(ThemeContext);

	return (
		<StyledHeader>
			I'm a {theme === themes.light ? 'light' : 'dark'} theme!
		</StyledHeader>
	);
};

export default Header;
