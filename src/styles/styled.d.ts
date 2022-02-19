import "styled-components"

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		main: {
			color: string
			textColor: string
			bgColor: string
			bgImageColor: string
		}
		secondary: {
			color: string
			bgColor: string
		}
	}
}
