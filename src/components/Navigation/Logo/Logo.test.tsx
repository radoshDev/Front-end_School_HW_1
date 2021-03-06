import { find } from "styled-components/test-utils"
import { renderWithRouter } from "../../../test/helper/renderWithRouter"
import { withTheme } from "../../../test/helper/withTheme"
import Logo, { TEXT_LOGO, S } from "./Logo"

describe("#Logo", () => {
	it("render component", () => {
		const { getByText, container, getByRole } = renderWithRouter(withTheme(<Logo />))
		expect(getByText(TEXT_LOGO)).toBeInTheDocument()
		expect(container.querySelector("svg")).toBeInTheDocument()
		const link = getByRole("link")
		expect(link.getAttribute("href")).toBe("/")
	})
	it("should have styles from styled-component", () => {
		renderWithRouter(withTheme(<Logo />))
		expect(find(document.body, S.Logo)).toBeInTheDocument()
	})
})
