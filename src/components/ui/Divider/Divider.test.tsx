import { render, screen } from "@testing-library/react"
import { find } from "styled-components/test-utils"
import { withTheme } from "../../../test/helper/withTheme"

import Divider, { S } from "./Divider"

describe("#Divider", () => {
	it("should render component when children and props not passed", () => {
		render(withTheme(<Divider />))
		expect(find(document.body, S.Line)).toBeInTheDocument()
	})
	it("should render component when children passed and props not passed", () => {
		const text = "Test"
		render(withTheme(<Divider>{text}</Divider>))
		expect(find(document.body, S.Line)).toBeInTheDocument()
		expect(screen.getByText(text)).toBeInTheDocument()
	})
	it("should render component when passed lineHeight", () => {
		const mockHight = 5
		render(withTheme(<Divider lineHeight={mockHight} />))
		expect(screen.getByTestId("divider")).toBeInTheDocument()
	})
})
