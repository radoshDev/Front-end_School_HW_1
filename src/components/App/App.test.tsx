/* eslint-disable react/function-component-definition */
import { renderWithRouter } from "../../test/helper/renderWithRouter"
import App from "./App"

jest.mock("../Navigation", () => () => <p>Navigation Component</p>)
jest.mock("../../pages/Trends", () => () => <p>Trends Page</p>)
jest.mock("../../pages/User", () => () => <p>User Page</p>)

describe("#App", () => {
	it("render component with '/' path", () => {
		const { getByText, queryByText } = renderWithRouter(<App />)
		expect(getByText(/navigation component/i)).toBeInTheDocument()
		expect(getByText("Trends Page")).toBeInTheDocument()
		expect(queryByText("User Page")).not.toBeInTheDocument()
	})
	it("render component with '/account/5' path", () => {
		const { getByText, queryByText } = renderWithRouter(<App />, { route: "/account/5" })
		expect(getByText(/navigation component/i)).toBeInTheDocument()
		expect(getByText("User Page")).toBeInTheDocument()
		expect(queryByText("Trends Page")).not.toBeInTheDocument()
	})
	it("render component with invalid path", () => {
		const { getByText, queryByText } = renderWithRouter(<App />, { route: "/invalid" })
		expect(getByText(/navigation component/i)).toBeInTheDocument()
		expect(getByText(/not found/i)).toBeInTheDocument()
		expect(queryByText("User Page")).not.toBeInTheDocument()
		expect(queryByText("Trends Page")).not.toBeInTheDocument()
	})
})
