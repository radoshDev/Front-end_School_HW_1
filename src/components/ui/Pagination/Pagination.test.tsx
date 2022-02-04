import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Pagination from "./Pagination"

describe("#Pagination", () => {
	it("should render component 7 pagination buttons (5 with numbers, prev, next)", () => {
		const handleActivePage = jest.fn()
		render(<Pagination activePage={1} setActivePage={handleActivePage} totalPages={10} />)
		expect(screen.getByText(/next/i)).toBeInTheDocument()
		expect(screen.getAllByRole("button")).toHaveLength(7)
	})
	it("should render only button 1 with active class", () => {
		const handleActivePage = jest.fn()
		render(<Pagination activePage={1} setActivePage={handleActivePage} totalPages={10} />)
		expect(screen.getByText("1")).toHaveClass("active")
		expect(screen.getByText("2")).not.toHaveClass("active")
	})
	it("should call setActivePage when click button", () => {
		const handleActivePage = jest.fn()
		render(<Pagination activePage={1} setActivePage={handleActivePage} totalPages={10} />)
		expect(screen.getByText("1")).toHaveClass("active")
		expect(screen.getByText("2")).not.toHaveClass("active")
		userEvent.click(screen.getByText("2"))
		expect(handleActivePage).toBeCalledWith(2)
	})
	it("should show next view buttons when click last button", () => {
		const handleActivePage = jest.fn()
		let activePage = 1
		const { rerender } = render(
			<Pagination
				activePage={activePage}
				setActivePage={handleActivePage}
				totalPages={10}
				maxButtonsCount={3}
			/>
		)
		userEvent.click(screen.getByText("3"))
		activePage = 3
		expect(handleActivePage).toBeCalledWith(activePage)
		rerender(
			<Pagination
				activePage={activePage}
				setActivePage={handleActivePage}
				totalPages={10}
				maxButtonsCount={3}
			/>
		)
		expect(screen.getByText("4")).toBeInTheDocument()
	})
	it.todo("should show prev view buttons when click first button")
	it("should call setActivePage when click next button", () => {
		const handleActivePage = jest.fn()
		const activePage = 3
		render(
			<Pagination
				activePage={activePage}
				setActivePage={handleActivePage}
				totalPages={10}
				maxButtonsCount={3}
			/>
		)
		expect(screen.getByText("1")).toBeInTheDocument()
		userEvent.click(screen.getByText("Next"))
		expect(handleActivePage).toBeCalledWith(activePage + 1)
	})
	it("should call setActivePage when click prev button", () => {
		const handleActivePage = jest.fn()
		const activePage = 3
		render(
			<Pagination
				activePage={activePage}
				setActivePage={handleActivePage}
				totalPages={10}
				maxButtonsCount={3}
			/>
		)
		expect(screen.getByText("1")).toBeInTheDocument()
		userEvent.click(screen.getByText("Prev"))
		expect(handleActivePage).toBeCalledWith(activePage - 1)
	})
})
