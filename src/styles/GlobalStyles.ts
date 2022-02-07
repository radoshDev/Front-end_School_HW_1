import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body {
		font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',  Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: ${p => p.theme.main.bgColor}
	}

	a {
		color: inherit;
		text-decoration: none;
	}
	img {
		width: 100%;
	}
`
