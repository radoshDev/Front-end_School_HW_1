import { render } from "@testing-library/react"
import VerifiedIcon from "./VerifiedIcon"

describe("#VerifiedIcon", () => {
	it("render component", () => {
		const { container, getByTestId } = render(<VerifiedIcon size={25} />)
		expect(getByTestId("verified-icon")).toBeInTheDocument()
		expect(container.querySelector("svg")).toBeInTheDocument()
	})
})
