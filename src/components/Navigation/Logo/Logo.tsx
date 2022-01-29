import { FC } from "react"
import { FaBolt } from "react-icons/fa"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"

export const TEXT_LOGO = "TikTuk"

const Logo: FC = () => {
	return (
		<S.Logo to="/">
			<FaBolt />
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
	`,
}

export default Logo
