import { FC } from "react"
import styled, { css } from "styled-components/macro"

type DividerProps = {
	lineHeight?: number
	lineColor?: string
}

const Divider: FC<DividerProps> = ({ lineHeight = 1, lineColor = "#22242626", children }) => {
	return (
		<S.Line
			lineHeight={lineHeight}
			lineColor={lineColor}
			hasChild={!!children}
			data-testid="divider">
			{children}
		</S.Line>
	)
}

type StyleProps = Required<DividerProps> & { hasChild: boolean }

const textBetweenLines = css<StyleProps>`
	&::before,
	&::after {
		content: "";
		width: 50%;
		height: ${p => `${p.lineHeight}px`};
		background-color: ${p => p.lineColor};
		line-height: 1;
		margin: 1rem 0;
	}
`
const solidLine = css<StyleProps>`
	background-color: ${p => p.lineColor};
	margin: 1rem 0;
	line-height: 1;
	height: ${p => p.lineHeight};
`
const flex = css`
	display: flex;
	align-items: center;
`

export const S = {
	Line: styled.div<StyleProps>`
		${p => (p.hasChild ? flex : "display: block")};
		${p => (p.hasChild ? textBetweenLines : solidLine)}
	`,
}

export default Divider
