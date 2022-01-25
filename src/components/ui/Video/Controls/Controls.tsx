import { FC } from "react"
import { IconBaseProps } from "react-icons"
import { FiPause, FiPlay } from "react-icons/fi"
import { RiVolumeDownFill, RiVolumeMuteFill } from "react-icons/ri"
import styled from "styled-components"

type Props = {
	isPlaying: boolean
	handlePlay: () => void
	isMuted: boolean
	handleMute: () => void
}

const Controls: FC<Props> = ({ isPlaying, handlePlay, isMuted, handleMute }) => {
	const playIcon: Pick<IconBaseProps, "size" | "color" | "onClick"> = {
		size: 28,
		color: "white",
		onClick: handlePlay,
	}
	const muteIcon: Pick<IconBaseProps, "size" | "color" | "onClick"> = {
		size: 28,
		color: "white",
		onClick: handleMute,
	}
	return (
		<S.Controls>
			{isPlaying ? (
				<FiPause {...playIcon} data-testid="icon-pause" />
			) : (
				<FiPlay {...playIcon} data-testid="icon-play" />
			)}
			{isMuted ? (
				<RiVolumeMuteFill {...muteIcon} data-testid="icon-muted" />
			) : (
				<RiVolumeDownFill {...muteIcon} data-testid="icon-unmuted" />
			)}
		</S.Controls>
	)
}

const S = {
	Controls: styled.div`
		position: absolute;
		padding: 0.5rem;
		left: 0;
		bottom: 0;
		z-index: 4;
		width: 100%;
		opacity: 0.8;
		display: flex;
		justify-content: space-between;
	`,
}

export default Controls
