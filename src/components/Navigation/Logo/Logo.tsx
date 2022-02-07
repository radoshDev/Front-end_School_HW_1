import { FC } from "react"
import { FaBolt } from "react-icons/fa"
import { Link } from "react-router-dom"
import styled, { useTheme } from "styled-components"

export const TEXT_LOGO = "TikTuk"

const Logo: FC = () => {
	const theme = useTheme()
	return (
		<S.Logo to="/">
			<FaBolt color={theme.main.textColor} />
			{TEXT_LOGO}
		</S.Logo>
	)
}

export const S = {
	Logo: styled(Link)`
		display: flex;
		align-items: center;
		font-weight: bold;
		font-size: 1.5rem;
		text-shadow: 2px 0 2px rgb(214, 54, 81);
		color: ${p => p.theme.main.textColor};
	`,
}

export default Logo
