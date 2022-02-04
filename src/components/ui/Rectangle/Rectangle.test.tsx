import { render } from "@testing-library/react"
import Rectangle from "./Rectangle"

describe("#Rectangle", () => {
	it("should render component with correct size and without fill color", () => {
		const mockSize = 200
		const { container, getByTestId } = render(<Rectangle width={mockSize} height={mockSize} />)
		const svg = getByTestId("rectangle-preloader")
		const rect = container.querySelector("rect")

		expect(svg).toBeInTheDocument()
		expect(svg.getAttribute("width")).toBe(`${mockSize}`)
		expect(svg.getAttribute("height")).toBe(`${mockSize}`)
		expect(rect).toBeInTheDocument()
		if (rect) {
			expect(rect.getAttribute("width")).toBe(`${mockSize}`)
			expect(rect.getAttribute("height")).toBe(`${mockSize}`)
			expect(rect.getAttribute("fill")).toBe("lightgray")
		}
	})
	it("should render component with correct size and with red fill", () => {
		const mockSize = 100
		const { container, getByTestId } = render(
			<Rectangle width={mockSize} height={mockSize} fill="red" />
		)
		const svg = getByTestId("rectangle-preloader")
		const rect = container.querySelector("rect")

		expect(svg).toBeInTheDocument()
		expect(svg.getAttribute("width")).toBe(`${mockSize}`)
		expect(svg.getAttribute("height")).toBe(`${mockSize}`)
		expect(rect).toBeInTheDocument()
		if (rect) {
			expect(rect.getAttribute("width")).toBe(`${mockSize}`)
			expect(rect.getAttribute("height")).toBe(`${mockSize}`)
			expect(rect.getAttribute("fill")).toBe("red")
		}
	})
	it("should return null when render component with zero size", () => {
		const mockSize = 0
		const { container, queryByTestId } = render(<Rectangle width={mockSize} height={mockSize} />)
		const svg = queryByTestId("rectangle-preloader")
		const rect = container.querySelector("rect")

		expect(svg).not.toBeInTheDocument()
		expect(rect).not.toBeInTheDocument()
	})
	it("should return null when render component with negative size", () => {
		const mockSize = -50
		const { container, queryByTestId } = render(<Rectangle width={mockSize} height={mockSize} />)
		const svg = queryByTestId("rectangle-preloader")
		const rect = container.querySelector("rect")

		expect(svg).not.toBeInTheDocument()
		expect(rect).not.toBeInTheDocument()
	})
})
