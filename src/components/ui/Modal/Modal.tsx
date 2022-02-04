import { useEffect, FC, MouseEvent } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components/macro"

type Props = {
	setIsModal: (value: boolean) => void
}

const modalRoot = document.createElement("div")
modalRoot.setAttribute("id", "modal-root")
document.body.append(modalRoot)

const Modal: FC<Props> = ({ children, setIsModal }) => {
	const overlayRootElement = document.createElement("div")

	const handleClose = (event: MouseEvent<HTMLDivElement>): void => {
		if ((event.target as Element).id === "modal-overlay") {
			setIsModal(false)
		}
	}
	useEffect(() => {
		document.body.style.overflow = "clip"
		modalRoot.append(overlayRootElement)
		return () => {
			document.body.style.overflow = "auto"
			overlayRootElement.remove()
		}
	}, [overlayRootElement])

	return createPortal(
		<S.Overlay id="modal-overlay" data-testid="modal-overlay" onClick={handleClose}>
			{children}
		</S.Overlay>,
		overlayRootElement
	)
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
