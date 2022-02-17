import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { ThemeProvider } from "styled-components"
import { useAppSelector } from "../../store/hooks"
import { toggleTheme } from "../../store/slices/themeSlice"
import { GlobalStyles } from "../GlobalStyles"
import { theme } from "../theme"

const ThemeWrapper: FC = ({ children }) => {
	const dispatch = useDispatch()
	const { themeValue } = useAppSelector(s => s.theme)

	useEffect(() => {
		const themeMode = localStorage.getItem("themeMode") as "light" | "dark" | null

		if (themeMode) dispatch(toggleTheme(themeMode))
	}, [dispatch])

	return (
		<ThemeProvider theme={theme[themeValue]}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	)
}

export default ThemeWrapper
