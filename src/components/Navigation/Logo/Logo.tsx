import { FC } from "react"
import { FaBolt } from "react-icons/fa"
import { Link } from "react-router-dom"
import styled from "styled-components/macro"

const Logo: FC = () => {
	return (
		<S.Logo to="/">
			<FaBolt />
			TikTuk
		</S.Logo>
	)
}

const S = {
	Logo: styled(Link)`
		display: flex;
		align-items: center;
		font-weight: bold;
		font-size: 1.5rem;
		text-shadow: 2px 0 2px rgb(214, 54, 81);
	`,
}

export default Logo
