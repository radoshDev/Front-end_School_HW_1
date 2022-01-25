import { FC } from "react"
import styled, { css } from "styled-components/macro"

type Props = {
	height?: string
	color?: string
}

const Divider: FC<Props> = ({ height, color, children }) => {
	return (
		<S.Line height={height} color={color} hasChild={!!children}>
			{children}
		</S.Line>
	)
}

const textBetweenLines = css<Props>`
	&::before,
	&::after {
		content: "";
		width: 50%;
		height: ${p => p.height || "1px"};
		background-color: ${p => p.color || "rgba(34, 36, 38, 0.15)"};
		line-height: 1;
		margin: 1rem 0;
	}
`
const solidLine = css<Props>`
	background-color: ${p => p.color || "rgba(34, 36, 38, 0.15)"};
	margin: 1rem 0;
	line-height: 1;
	height: ${p => p.height || "1px"};
`
const flex = css`
	display: flex;
	align-items: center;
`

export const S = {
	Line: styled.div<Props & { hasChild: boolean }>`
		${p => (p.hasChild ? flex : "display: block")};
		${p => (p.hasChild ? textBetweenLines : solidLine)}
	`,
}

export default Divider
