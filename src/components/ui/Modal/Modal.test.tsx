import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Modal from "./Modal"

describe("#Modal", () => {
	it("should show the children and modal window", () => {
		const handleIsModal = jest.fn()
		render(
			<Modal setIsModal={handleIsModal}>
				<p>Test modal</p>
			</Modal>
		)
		expect(screen.getByText(/test modal/i)).toBeInTheDocument()
		expect(document.body.style.overflow).toBe("clip")
	})
	it("should call setIsModal by clicking overlay", () => {
		const handleIsModal = jest.fn()
		render(
			<Modal setIsModal={handleIsModal}>
				<p>Test modal</p>
			</Modal>
		)
		expect(screen.getByText(/test modal/i)).toBeInTheDocument()
		const overlayElement = screen.queryByTestId("modal-overlay")
		if (overlayElement) {
			userEvent.click(overlayElement)
			expect(handleIsModal).toBeCalled()
		} else {
			throw new Error("No element with testid 'modal-overlay'")
		}
	})
	it("should not call setIsModal by clicking modal", () => {
		const handleIsModal = jest.fn()
		render(
			<Modal setIsModal={handleIsModal}>
				<p>Test modal</p>
			</Modal>
		)
		const modal = screen.getByText(/test modal/i)
		expect(modal).toBeInTheDocument()

		userEvent.click(modal)
		expect(handleIsModal).not.toBeCalled()
	})
	it("should hide modal window", () => {
		const handleIsModal = jest.fn()
		const { unmount } = render(
			<Modal setIsModal={handleIsModal}>
				<p>Test modal</p>
			</Modal>
		)
		expect(screen.getByText(/test modal/i)).toBeInTheDocument()
		expect(document.body.style.overflow).toBe("clip")
		unmount()
		expect(screen.queryByText(/test modal/i)).not.toBeInTheDocument()
		expect(document.body.style.overflow).toBe("auto")
	})
})
