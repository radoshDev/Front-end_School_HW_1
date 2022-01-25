import { render, screen } from "@testing-library/react"
import { find } from "styled-components/test-utils"

import Divider, { S } from "./Divider"

describe("#Divider", () => {
	it("render component without children", () => {
		render(<Divider />)
		expect(find(document.body, S.Line)).toBeInTheDocument()
	})
	it("render component with children", () => {
		const text = "Test"
		render(<Divider>{text}</Divider>)
		expect(find(document.body, S.Line)).toBeInTheDocument()
		expect(screen.getByText(text)).toBeInTheDocument()
	})
})
