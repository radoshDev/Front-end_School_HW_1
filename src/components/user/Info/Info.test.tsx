import { render, screen } from "@testing-library/react"
import { withTheme } from "../../../test/helper/withTheme"
import { UserInfo } from "../../../types/usersTypes"
import Info from "./Info"

const mockUser: Pick<
	UserInfo,
	"uniqueId" | "verified" | "nickname" | "signature" | "avatarMedium"
> = {
	uniqueId: "test-id",
	verified: false,
	nickname: "test-nickname",
	signature: "test-signature",
	avatarMedium: "test-avatar-url",
}
describe("#Info", () => {
	it("should render content when isLoading falsy", () => {
		render(withTheme(<Info user={mockUser as UserInfo} isLoading={false} />))
		const avatarImg = screen.getByAltText(mockUser.nickname)
		expect(avatarImg.getAttribute("src")).toBe(mockUser.avatarMedium)
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
			new RegExp(mockUser.uniqueId)
		)
		expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
			new RegExp(mockUser.nickname)
		)
		expect(screen.getByText(mockUser.signature)).toBeInTheDocument()
	})
	it("should render preloader when isLoading truthy", () => {
		render(withTheme(<Info user={mockUser as UserInfo} isLoading />))

		expect(screen.getAllByTestId("rectangle-preloader").length).toBeGreaterThan(1)
		expect(screen.queryByAltText(mockUser.nickname)).not.toBeInTheDocument()
		expect(screen.queryByText(mockUser.signature)).not.toBeInTheDocument()
	})
})
