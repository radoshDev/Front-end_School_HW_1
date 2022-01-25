import { FC, useState, useRef, ReactEventHandler } from "react"
import styled from "styled-components/macro"
import Controls from "./Controls"

type Props = {
	url?: string
}
const Video: FC<Props> = ({ url }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(true)

	const videoRef = useRef<HTMLVideoElement | null>(null)
	const handlePlay = (): void => {
		if (!videoRef.current) return
		if (isPlaying) {
			videoRef.current?.pause()
			setIsPlaying(false)
		} else {
			videoRef.current?.play().catch((error: Error) => {
				throw new Error(error.message)
			})
			setIsPlaying(true)
		}
	}
	const handleLoaded: ReactEventHandler<HTMLVideoElement> = async event => {
		await (event.target as HTMLVideoElement).play()
		setIsPlaying(true)
		setIsLoading(false)
	}
	const handleMute = (): void => {
		setIsMuted(p => !p)
	}

	return (
		<S.VideoContainer isLoading={isLoading}>
			<video ref={videoRef} src={url} onLoadedData={handleLoaded} muted={isMuted} loop />
			<Controls
				isPlaying={isPlaying}
				handlePlay={handlePlay}
				isMuted={isMuted}
				handleMute={handleMute}
			/>
		</S.VideoContainer>
	)
}

const S = {
	VideoContainer: styled.div<{ isLoading: boolean }>`
		position: relative;
		height: 100%;
		opacity: ${p => (p.isLoading ? "0" : "1")};
		display: flex;
		video {
			object-fit: cover;
			object-position: center;
			width: 100%;
			max-height: 600px;
		}
	`,
}

export default Video
