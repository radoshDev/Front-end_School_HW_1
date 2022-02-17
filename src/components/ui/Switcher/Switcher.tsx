import React from "react"
import { useDispatch } from "react-redux"
import Switch from "react-switch"
import styled, { css } from "styled-components"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useAppSelector } from "../../../store/hooks"
import { toggleTheme } from "../../../store/slices/themeSlice"

const Switcher = (): React.ReactElement => {
	const dispatch = useDispatch()
	const { themeValue } = useAppSelector(s => s.theme)

	const handleToggle = (): void => {
		const themeMode = themeValue === "light" ? "dark" : "light"

		dispatch(toggleTheme(themeMode))
		localStorage.setItem("themeMode", themeMode)
	}
	return (
		<Switch
			checked={themeValue === "dark"}
			onChange={handleToggle}
			uncheckedIcon={<S.Light size={20} />}
			checkedIcon={<S.Dark size={20} />}
			onColor="#0F1114"
			offColor="#0F1114"
		/>
	)
}

const iconAlignment = css`
	fill: #feeb56;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const S = {
	Dark: styled(MdDarkMode)`
		${iconAlignment}
	`,
	Light: styled(MdLightMode)`
		${iconAlignment}
	`,
}
export default Switcher
