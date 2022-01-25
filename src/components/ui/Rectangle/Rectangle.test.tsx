import { render } from "@testing-library/react"
import Rectangle from "./Rectangle"

describe("#Rectangle", () => {
	it("render component", () => {
		const { container } = render(<Rectangle width={200} height={200} />)
		expect(container.querySelector("svg")).toBeInTheDocument()
		expect(container.querySelector("rect")).toBeInTheDocument()
	})
})
