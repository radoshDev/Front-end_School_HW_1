import { FC } from "react"
import styled from "styled-components/macro"
import Rectangle from "../../ui/Rectangle"

const Preloader: FC = () => {
	const mockArray = new Array(12).fill(1)
	return (
		<>
			{mockArray.map((item, index) => (
				<S.Wrapper key={item + index}>
					<Rectangle width={300} height={500} />
				</S.Wrapper>
			))}
		</>
	)
}

const S = {
	Wrapper: styled.div`
		overflow: hidden;
		cursor: pointer;
	`,
}

export default Preloader
