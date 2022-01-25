import { useState, useRef, useEffect, FC } from "react"
import { useDispatch } from "react-redux"
import { useInView } from "react-intersection-observer"
import { useAppSelector } from "store/hooks"
import styled from "styled-components/macro"
import { setMutedAll } from "store/slices/trendsSlice"
import Controls from "components/ui/Video/Controls"

type Props = {
	videoUrl?: string
}

const VideoBlock: FC<Props> = ({ videoUrl }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [isPlaying, setIsPlaying] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.5,
	})
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const isMuted = useAppSelector(s => s.trends.isMuted)
	const dispatch = useDispatch()

	const handlePlay = async (): Promise<void> => {
		if (!videoRef.current) return
		if (isPlaying) {
			await videoRef.current?.pause()
			setIsPlaying(false)
		} else {
			await videoRef.current?.play()
			setIsPlaying(true)
		}
	}
	const handleMute = (): void => {
		dispatch(setMutedAll())
	}
	const handleAutoPlay = async (): Promise<void> => {
		if (inView) {
			await videoRef.current?.play()
			setIsPlaying(true)
		} else {
			await videoRef.current?.pause()
			setIsPlaying(false)
		}
	}

	useEffect(() => {
		if (!isLoading) {
			handleAutoPlay().catch((error: Error) => {
				throw new Error(error.message)
			})
		}
	}, [inView, isLoading])
	return (
		<S.VideoBlock isLoading={isLoading}>
			<video
				ref={videoRef}
				src={videoUrl}
				onLoadedData={() => setIsLoading(false)}
				muted={isMuted}
				loop
			/>
			<Controls
				isPlaying={isPlaying}
				handlePlay={handlePlay}
				isMuted={isMuted}
				handleMute={handleMute}
			/>
			<div className="overlap" ref={ref} />
		</S.VideoBlock>
	)
}

const S = {
	VideoBlock: styled.div<{ isLoading: boolean }>`
		position: relative;
		height: 600px;
		background-color: lightgray;
		.overlap {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
		}
		video {
			object-fit: cover;
			object-position: center;
			width: 100%;
			max-height: 600px;
			opacity: ${p => (p.isLoading ? "0" : "1")};
			transition: opacity 0.5s ease-in-out;
		}
		.controls {
			position: absolute;
			padding: 0.5rem;
			left: 0;
			bottom: 0;
			z-index: 4;
			width: 100%;
			opacity: 0.8;
			display: flex;
			justify-content: space-between;
		}
	`,
}

export default VideoBlock
