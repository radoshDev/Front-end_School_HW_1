import { ROUTES } from "../../../pages/router"
import { renderWithRouter } from "../../../test/helper/renderWithRouter"
import UserSign, { UserSignProps } from "./UserSign"

describe("#UserSign", () => {
	it("should render component when verification falsy", () => {
		const mockProps: UserSignProps = {
			authorName: "test-name",
			authorNickname: "test-nickname",
			isAuthorVerified: false,
		}
		const { getByText, queryByTestId } = renderWithRouter(<UserSign {...mockProps} />)
		const usernameElement = getByText(mockProps.authorName)
		const nicknameElement = getByText(mockProps.authorNickname)
		expect(usernameElement.getAttribute("href")).toBe(`${ROUTES.account}/${mockProps.authorName}`)
		expect(nicknameElement.getAttribute("href")).toBe(`${ROUTES.account}/${mockProps.authorName}`)
		expect(queryByTestId("verified-icon")).not.toBeInTheDocument()
	})
	it("should render component when verification truthy", () => {
		const mockProps: UserSignProps = {
			authorName: "test-name",
			authorNickname: "test-nickname",
			isAuthorVerified: true,
		}
		const { queryByTestId } = renderWithRouter(<UserSign {...mockProps} />)

		expect(queryByTestId("verified-icon")).toBeInTheDocument()
	})
})
