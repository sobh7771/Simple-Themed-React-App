import React, { useContext } from 'react';
import styled from 'styled-components';
import { themes, ThemeContext } from '../context/theme-context';

const StyledHeading = styled.h1`
	margin-top: 2rem;
`;

const Heading = () => {
	const { theme } = useContext(ThemeContext);

	console.log(theme === themes.light);
	return (
		<StyledHeading>
			It's a {theme === themes.light ? 'light' : 'Dark'} theme!
		</StyledHeading>
	);
};

export default Heading;
