import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useAppSelector } from "store/hooks"
import styled from "styled-components/macro"
import VideoCard from "components/user/VideoCard"
import ErrorText from "components/ui/ErrorText"
import { loadUserFeed } from "store/slices/userSlice"
import Preloader from "components/user/Preloader"

const VideoBlock: FC = () => {
	const dispatch = useDispatch()
	const { data: feeds, isLoading, error } = useAppSelector(s => s.user.feed)
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
			{isLoading ? <Preloader /> : feeds.map(feed => <VideoCard videoInfo={feed} key={feed.id} />)}
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
}
export default VideoBlock
