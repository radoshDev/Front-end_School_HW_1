import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"
import { useAppSelector } from "../../../store/hooks"
import { loadUserFeed } from "../../../store/slices/userSlice"
import ErrorText from "../../ui/ErrorText"
import Preloader from "../Preloader"
import VideoCard from "../VideoCard"

const VideoGrid: FC = () => {
	const dispatch = useDispatch()
	const { data: feeds, isLoading, error } = useAppSelector(s => s.user.feed)
	const userId = useAppSelector(s => s.user.info.data?.user?.uniqueId)
	const { id } = useParams()
	useEffect(() => {
		if (userId !== id) {
			dispatch(loadUserFeed())
		}
	}, [dispatch, userId, id])

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
export default VideoGrid
