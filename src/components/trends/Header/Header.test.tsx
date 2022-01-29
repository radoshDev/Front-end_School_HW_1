import { renderWithRouter } from "../../../test/helper/renderWithRouter"
import Header, { HeaderProps } from "./Header"

describe("#Header", () => {
	it("render component", () => {
		const mockProps: HeaderProps = {
			authorName: "test-name",
			authorNickname: "test-nickname",
			avatarUrl: "test-avatar-url",
			description: "test text",
			hashtags: [],
			isAuthorVerified: false,
		}
		const { getByText, getByRole } = renderWithRouter(<Header {...mockProps} />)

		expect(getByRole("img", { name: mockProps.authorName })).toBeInTheDocument()
		expect(getByText(mockProps.authorName)).toBeInTheDocument()
		expect(getByText(mockProps.authorNickname)).toBeInTheDocument()
		expect(getByText(mockProps.description)).toBeInTheDocument()
	})
})
