import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SunIcon } from '../Assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../Assets/icons/moon.svg';
import themes from '../themes';

const Btn = styled.button`
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
	background-image: ${({ theme }) => theme.button.gradient};
	overflow: hidden;

	svg {
		width: 4rem;
		height: 4rem;
		transition: all 0.3s linear;

		&:first-child {
			transform: ${({ theme }) =>
				theme === themes.light ? 'translateY(0)' : 'translateY(120%)'};
		}
		&:last-child {
			transform: ${({ theme }) =>
				theme === themes.light ? 'translateY(-120%)' : 'translateY(0)'};
		}
	}
`;

const Button = ({ toggleTheme }) => {
	return (
		<Btn onClick={toggleTheme}>
			<SunIcon />
			<MoonIcon />
		</Btn>
	);
};

export default Button;
