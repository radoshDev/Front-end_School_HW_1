import { render } from "@testing-library/react"
import ActionBar from "./ActionBar"

describe("#ActionBar", () => {
	it("render component without props", () => {
		const { container } = render(<ActionBar />)
		expect(container.querySelectorAll(".amount")[0]).toHaveTextContent("0")
		expect(container.querySelectorAll(".amount")[1]).toHaveTextContent("0")
	})
	it("render component with own props", () => {
		const { container } = render(<ActionBar commentCount={10} likeCount={2000} />)

		const result = container.querySelectorAll(".amount")
		const likeAmountElement = result[0]
		const commentAmountElement = result[1]
		expect(likeAmountElement).toHaveTextContent("2K")
		expect(commentAmountElement).toHaveTextContent("10")
	})
})
