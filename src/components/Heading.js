import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import themes from '../themes';

const Title = styled.h1`
	margin-top: 2rem;
`;

const Heading = () => {
	const theme = useContext(ThemeContext);

	return (
		<Title>I'm a {theme === themes.light ? 'light' : 'dark'} theme!</Title>
	);
};

export default Heading;
