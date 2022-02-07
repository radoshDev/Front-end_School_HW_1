import { ReactElement } from "react"
import { FcLike } from "react-icons/fc"
import { FaCommentDots } from "react-icons/fa"
import styled, { useTheme } from "styled-components"
import { abbreviateNumber } from "../../../helpers/abbreviateNumber"

export type Props = {
	commentCount?: number
	likeCount?: number
}

const ActionBar = ({ commentCount = 0, likeCount = 0 }: Props): ReactElement => {
	const theme = useTheme()
	return (
		<S.ActionBar>
			<div className="item-action">
				<div className="icon">
					<FcLike size={30} />
				</div>
				<span className="amount">{abbreviateNumber(likeCount)}</span>
			</div>
			<div className="item-action">
				<div className="icon">
					<FaCommentDots size={30} color={theme.secondary.color} />
				</div>
				<span className="amount">{abbreviateNumber(commentCount)}</span>
			</div>
		</S.ActionBar>
	)
}

export const S = {
	ActionBar: styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0.5rem 0 0 0.5rem;
		position: absolute;
		bottom: 0;
		right: -1rem;
		transform: translateX(100%);

		.item-action {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-bottom: 0.8rem;
			color: ${p => p.theme.main.textColor};
		}
	`,
}

export default ActionBar
