import { ReactElement, useState } from "react"
import styled from "styled-components/macro"
import { abbreviateNumber } from "../../../helpers/abbreviateNumber"
import { Video as VideoT, Stats } from "../../../types/usersTypes"
import Modal from "../../ui/Modal"
import Video from "../../ui/Video"

type Props = {
	videoInfo: VideoT
	stats: Stats
}
const VideoCard = ({ videoInfo, stats }: Props): ReactElement => {
	const [isVideoShow, setIsVideoShow] = useState(false)
	const [isModal, setIsModal] = useState(false)

	const handleOpenModal = (): void => {
		setIsModal(true)
	}
	return (
		<>
			<S.Card
				onClick={() => {
					handleOpenModal()
				}}
				onMouseEnter={() => setIsVideoShow(true)}
				onMouseLeave={() => setIsVideoShow(false)}>
				<S.Title>{abbreviateNumber(stats.playCount)} views</S.Title>
				<S.VideoWrapper imgUrl={videoInfo.cover} data-testid="video-cover">
					{isVideoShow && <Video url={videoInfo.playAddr} />}
				</S.VideoWrapper>
			</S.Card>
			{isModal && (
				<Modal setIsModal={setIsModal}>
					<Video url={videoInfo.playAddr} />
				</Modal>
			)}
		</>
	)
}

const S = {
	Card: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		position: relative;
		cursor: pointer;
	`,
	Title: styled.p`
		position: absolute;
		text-align: center;
		padding: 0.5rem 0 1rem;
		color: white;
		background: linear-gradient(180deg, rgba(85, 85, 85, 1) 0%, rgba(253, 255, 255, 0) 100%);
		top: 0;
		left: 0;
		width: 100%;
	`,
	VideoWrapper: styled.div<{ imgUrl?: string }>`
		background-image: url(${p => p.imgUrl || ""});
		background-color: lightgray;
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100%;
	`,
}
export default VideoCard
