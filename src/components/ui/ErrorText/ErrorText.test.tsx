import { render, screen } from "@testing-library/react"
import { find } from "styled-components/test-utils"
import ErrorText, { S } from "./ErrorText"

describe("#ErrorText", () => {
	it("render component with children", () => {
		const testId = "error-message"
		render(
			<ErrorText>
				<span data-testid={testId}>Test error</span>
			</ErrorText>
		)
		expect(screen.getByTestId(testId)).toHaveTextContent(/test error/i)
	})

	it("should return null when render without children", () => {
		const { container } = render(<ErrorText />)
		expect(container.firstChild).toBeNull()
	})

	it("should have styles from styled-component", () => {
		render(<ErrorText>Mock text</ErrorText>)
		expect(find(document.body, S.Error)).toBeInTheDocument()
	})
})
