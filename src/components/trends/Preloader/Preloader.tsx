import { FC } from "react"
import styled from "styled-components/macro"
import Rectangle from "../../ui/Rectangle"

const Preloader: FC = () => {
	return (
		<S.Container>
			<div className="icon">
				<Rectangle width={55} height={55} />
			</div>
			<div className="content">
				<Rectangle width={250} height={30} />
				<Rectangle width={300} height={30} />
			</div>
			<div className="video">
				<Rectangle width={300} height={600} />
			</div>
		</S.Container>
	)
}

const S = {
	Container: styled.div`
		display: grid;
		grid-template-columns: 55px 1fr;
		grid-template-rows: max-content 600px;
		gap: 1rem;
		.icon {
			border-radius: 50%;
			height: 55px;
			overflow: hidden;
		}
		.content {
			display: flex;
			flex-direction: column;
			svg {
				margin-bottom: 0.5rem;
			}
		}
	`,
}

export default Preloader
