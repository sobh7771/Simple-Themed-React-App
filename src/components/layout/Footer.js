import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;

const Footer = () => (
	<StyledFooter>
		<span>Credits:</span>
		<small>
			<b>Sun</b> icon made by{' '}
			<a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a>{' '}
			from <a href="https://www.flaticon.com">www.flaticon.com</a>
		</small>
		<small>
			<b>Moon</b> icon made by{' '}
			<a href="https://www.freepik.com/home">Freepik</a> from{' '}
			<a href="https://www.flaticon.com">www.flaticon.com</a>
		</small>
	</StyledFooter>
);

export default Footer;
