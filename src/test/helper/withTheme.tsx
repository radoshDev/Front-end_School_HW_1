import { ReactElement, ReactNode } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"

const mockTheme: DefaultTheme = {
	main: {
		color: "#212121",
		textColor: "#ebebeb",
		bgColor: "hsl(222deg 14% 18%);",
	},
	secondary: {
		color: "#fff",
		bgColor: "hsl(222deg 24% 18%);",
	},
}

export const withTheme = (component: ReactNode, theme = mockTheme): ReactElement => {
	return <ThemeProvider theme={theme}>{component}</ThemeProvider>
}
