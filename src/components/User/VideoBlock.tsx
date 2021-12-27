import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useAppSelector } from "app/hooks"
import styled from "styled-components/macro"
import VideoItem from "components/User/VideoItem"
import Rectangle from "components/UI/Rectangle"
import ErrorText from "components/UI/ErrorText"
import { loadUserFeed } from "features/user/userSlice"

const mockArray = new Array(12).fill(1)

const VideoPreloader = () => (
	<>
		{mockArray.map((item, index) => (
			<S.VideoWrapper key={item + index}>
				<Rectangle width={300} height={500} />
			</S.VideoWrapper>
		))}
	</>
)

const VideoBlock: FC = () => {
	const dispatch = useDispatch()
	const { data, isLoading, error } = useAppSelector(s => s.user.feed)
	const userId = useAppSelector(s => s.user.info.data?.user?.uniqueId)
	const { id } = useParams()

	useEffect(() => {
		if (id !== userId) {
			dispatch(loadUserFeed())
		}
	}, [id, dispatch, userId])
	if (error) return <ErrorText>{error}</ErrorText>
	return (
		<S.VideoGrid>
			{isLoading ? (
				<VideoPreloader />
			) : (
				data.map(item => <VideoItem videoInfo={item} key={item.id} />)
			)}
		</S.VideoGrid>
	)
}

const S = {
	VideoGrid: styled.div`
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
		grid-template-rows: 350px;
		grid-auto-rows: 350px;
		gap: 0.5rem;

		margin-top: 1rem;
		position: relative;
	`,
	VideoWrapper: styled.div`
		overflow: hidden;
		cursor: pointer;
	`,
}
export default VideoBlock
