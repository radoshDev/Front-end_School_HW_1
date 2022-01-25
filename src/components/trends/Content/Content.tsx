import { FC } from "react"
import ActionBar from "components/ui/ActionBar"
import styled from "styled-components/macro"
import VideoBlock from "components/trends/VideoBlock"

type ContentProps = {
	videoUrl: string
	commentCount: number
	likeCount: number
}

const Content: FC<ContentProps> = ({ videoUrl, commentCount, likeCount }) => {
	return (
		<S.Content>
			<S.Wrapper>
				<VideoBlock videoUrl={videoUrl} />
				<ActionBar commentCount={commentCount} likeCount={likeCount} />
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
