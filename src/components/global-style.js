import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	html,
	body {
		height: 100vh;
	}

	body {
		font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica,
			Arial, sans-serif;
		font-size: 1.6rem;
		/* Light theme */
		background: ${({ theme }) => theme.body.background};
		color: ${({ theme }) => theme.body.color};
		display: flex;
		align-items: flex-end;
		justify-content: center;
		transition: all 0.25s linear 0s;
	}

	a {
		color: inherit;
	}

	#root {
		display: flex;
		height: 55vh;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
	}
`;
