import { render, screen } from "@testing-library/react"
import Preloader from "./Preloader"

describe("#Preloader", () => {
	it("should render at least 1 rectangle-preloader component", () => {
		render(<Preloader />)
		expect(screen.getAllByTestId("rectangle-preloader").length).toBeGreaterThanOrEqual(1)
	})
})
