import { render, screen } from "@testing-library/react"
import { find } from "styled-components/test-utils"

import Divider, { S } from "./Divider"

describe("#Divider", () => {
	it("should render component when children and props not passed", () => {
		render(<Divider />)
		expect(find(document.body, S.Line)).toBeInTheDocument()
	})
	it("should render component when children passed and props not passed", () => {
		const text = "Test"
		render(<Divider>{text}</Divider>)
		expect(find(document.body, S.Line)).toBeInTheDocument()
		expect(screen.getByText(text)).toBeInTheDocument()
	})
	it("should render component when passed lineColor and lineHeight", () => {
		const mockColor = "red"
		const mockHight = 5
		render(<Divider lineColor={mockColor} lineHeight={mockHight} />)
		expect(screen.getByTestId("divider")).toBeInTheDocument()
	})
})
