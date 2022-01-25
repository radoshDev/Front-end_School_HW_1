import { render } from "@testing-library/react"
import VerifiedIcon from "./VerifiedIcon"

describe("#VerifiedIcon", () => {
	it("render component", () => {
		const { container } = render(<VerifiedIcon size={25} />)
		expect(container.querySelector("svg")).toBeInTheDocument()
	})
})
