/* eslint-disable react/function-component-definition */
/* eslint-disable unicorn/consistent-function-scoping */
import { renderWithRouter } from "../../../test/helper/renderWithRouter"
import { withTheme } from "../../../test/helper/withTheme"
import { UserInfo } from "../../../types/usersTypes"
import UserIcon from "./UserIcon"

jest.mock("../../ui/Avatar", () => () => "Avatar Mock")

describe("#UserIcon", () => {
	beforeEach(() => {
		jest.resetAllMocks()
	})
	const mockUser: Pick<UserInfo, "avatarThumb" | "nickname" | "uniqueId"> = {
		avatarThumb: "test-avatar-url",
		nickname: "test-nickname",
		uniqueId: "test-id",
	}

	it("render component when loading data", () => {
		const { getByTestId, queryByRole } = renderWithRouter(
			withTheme(<UserIcon isLoading user={mockUser as UserInfo} />)
		)
		expect(getByTestId("account-circle")).toBeInTheDocument()
		expect(queryByRole("link")).not.toBeInTheDocument()
	})
	it("render component when data loaded", () => {
		const { queryByTestId, getByRole } = renderWithRouter(
			<UserIcon isLoading={false} user={mockUser as UserInfo} />
		)
		expect(getByRole("link")).toBeInTheDocument()
		expect(queryByTestId("account-circle")).not.toBeInTheDocument()
		expect(getByRole("link").getAttribute("href")).toBe(`/account/${mockUser.uniqueId}`)
		expect(getByRole("link")).toHaveTextContent(/avatar mock/i)
	})
})
