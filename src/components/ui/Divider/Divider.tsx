import { FC } from "react"
import styled, { css } from "styled-components/macro"

type DividerProps = {
	lineHeight?: number
}

const Divider: FC<DividerProps> = ({ lineHeight = 1, children }) => {
	return (
		<S.Line lineHeight={lineHeight} hasChild={!!children} data-testid="divider">
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
		background-color: ${p => p.theme.secondary.color};
		opacity: 0.3;
		line-height: 1;
		margin: 1rem 0;
	}
`
const solidLine = css<StyleProps>`
	background-color: ${p => p.theme.secondary.color};
	opacity: 0.3;
	margin: 1rem 0;
	line-height: 1;
	height: ${p => `${p.lineHeight}px`};
`
const flex = css`
	display: flex;
	align-items: center;
`

export const S = {
	Line: styled.div<StyleProps>`
		${p => (p.hasChild ? flex : "display: block")};
		${p => (p.hasChild ? textBetweenLines : solidLine)}
		gap: 10px;
		color: ${p => p.theme.main.textColor};
	`,
}

export default Divider
