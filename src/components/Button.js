import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import Img from './Img';

const StyledButton = styled.button`
	padding: 0.7rem 0.8rem 0.8rem;
	border-radius: 3rem;
	margin: 0 auto;
	width: 12.8rem;
	height: 5.6rem;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	border-width: 2px;
	border-style: solid;
	border-color: ${({ theme }) => theme.button.borderColor};
	background-image: ${({ theme }) =>
		`linear-gradient(${theme.button.background[0]} ,${theme.button.background[1]})`};
	overflow: hidden;
`;

const Button = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<StyledButton theme={theme} onClick={toggleTheme}>
			<Img
				animation="move-down"
				theme={theme}
				src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
				alt="Sun free icon"
			/>
			<Img
				animation="move-up"
				theme={theme}
				src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
				alt="Moon free icon"
			/>
		</StyledButton>
	);
};

export default Button;
