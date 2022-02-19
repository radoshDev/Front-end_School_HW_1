import { DefaultTheme as Theme } from "styled-components"

const lightTheme: Theme = {
	main: {
		color: "#00000",
		textColor: "#212121",
		bgColor: "#FAFAFA",
		bgImageColor: "#a5ffb4",
	},
	secondary: {
		color: "#757575",
		bgColor: "#fff",
	},
}
const darkTheme: Theme = {
	main: {
		color: "#212121",
		textColor: "#ebebeb",
		bgColor: "hsl(222deg 14% 18%);",
		bgImageColor: "#a5ffb4",
	},
	secondary: {
		color: "#fff",
		bgColor: "hsl(222deg 24% 18%);",
	},
}

export const theme = {
	dark: darkTheme,
	light: lightTheme,
}
