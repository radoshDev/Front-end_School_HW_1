import { FC } from "react"
import styled from "styled-components/macro"
import TrendVideo from "components/Trends/TrendVideo"
import ItemActionBar from "components/UI/ItemActionBar"

type Props = {
	videoUrl: string
	commentCount: number
	likeCount: number
}

const Content: FC<Props> = ({ videoUrl, commentCount, likeCount }) => {
	return (
		<S.Content>
			<S.Wrapper>
				<TrendVideo videoUrl={videoUrl} />
				<ItemActionBar commentCount={commentCount} likeCount={likeCount} />
			</S.Wrapper>
		</S.Content>
	)
}

const S = {
	Content: styled.div`
		display: flex;
	`,
	Wrapper: styled.div`
		display: flex;
		position: relative;
	`,
}
export default Content
