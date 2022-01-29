import { render, screen } from "@testing-library/react"
import Preloader from "./Preloader"

describe("#Preloader", () => {
	it("should render component", () => {
		render(<Preloader />)
		expect(screen.getAllByTestId("rectangle-preloader")[0]).toBeInTheDocument()
		expect(screen.getAllByTestId("rectangle-preloader").length).toBe(12)
	})
})
