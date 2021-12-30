import { useEffect, FC, MouseEvent } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components/macro"

type Props = {
	setIsModal: (value: boolean) => void
}

const Modal: FC<Props> = ({ children, setIsModal }) => {
	const overlayRootElement = document.getElementById("modal-root")
	const handleClose = (event: MouseEvent<HTMLDivElement>) => {
		if ((event.target as Element).id === "overlay-modal") {
			setIsModal(false)
		}
	}
	useEffect(() => {
		document.body.style.overflow = "clip"
		return () => {
			document.body.style.overflow = "auto"
		}
	}, [])
	return overlayRootElement
		? ReactDOM.createPortal(
				<S.Overlay id="overlay-modal" onClick={handleClose}>
					{children}
				</S.Overlay>,
				overlayRootElement
		  )
		: null
}

const S = {
	Overlay: styled.div`
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
		cursor: pointer;
		z-index: 10;
		& > * {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: auto;
			z-index: 11;
		}
		& video {
			max-height: 100%;
		}
	`,
}
export default Modal
