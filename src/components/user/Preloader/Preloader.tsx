import Rectangle from "components/ui/Rectangle"
import { FC } from "react"
import styled from "styled-components/macro"

const Preloader: FC = () => {
	const mockArray = new Array(12).fill(1)
	return (
		<>
			{mockArray.map((item, index) => (
				<S.VideoWrapper key={item + index}>
					<Rectangle width={300} height={500} />
				</S.VideoWrapper>
			))}
		</>
	)
}

const S = {
	VideoWrapper: styled.div`
		overflow: hidden;
		cursor: pointer;
	`,
}

export default Preloader
