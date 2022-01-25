import { FC } from "react"
import styled from "styled-components/macro"

const ErrorText: FC = ({ children }) => {
	return <S.Error>{children}</S.Error>
}

export const S = {
	Error: styled.p`
		color: rebeccapurple;
		font-size: 1.5rem;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: max-content;
	`,
}

export default ErrorText
