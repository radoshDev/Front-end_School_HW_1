import Navigation from "./Navigation"
import { getUserMe } from "../../services/user/getUserMe"
import { renderWithReduxAndRouter } from "../../test/helper/renderWithReduxAndRouter"
import { User } from "../../types/usersTypes"
import { USER_ERRORS } from "../../store/slices/constants"

type MockedUser = Pick<User, "avatarThumb" | "nickname" | "uniqueId">
const mockedUser: MockedUser = {
	avatarThumb: "avatar-url-test",
	nickname: "nickname-test",
	uniqueId: "id-test",
}
jest.mock("../../services/user/getUserMe", () => {
	return {
		__esModule: true,
		getUserMe: jest.fn(),
	}
})
const mockedGetUserMe = getUserMe as jest.MockedFunction<typeof getUserMe>

describe("#Navigation", () => {
	it("should render component with preloader", () => {
		const { getByTestId } = renderWithReduxAndRouter(<Navigation />)

		expect(getUserMe).toBeCalled()
		expect(getByTestId("account-circle")).toBeInTheDocument()
	})
	it("should render component when response fulfilled", async () => {
		mockedGetUserMe.mockImplementation(() => Promise.resolve(mockedUser as User))
		const { queryByTestId, findByRole, getAllByRole } = renderWithReduxAndRouter(<Navigation />)

		expect(getUserMe).toBeCalled()
		expect(queryByTestId("account-circle")).toBeInTheDocument()
		const iconImg = await findByRole("img")
		expect(iconImg).toBeInTheDocument()
		expect(queryByTestId("account-circle")).not.toBeInTheDocument()
		const [, userAccountLink] = getAllByRole("link")
		expect(userAccountLink.getAttribute("href")).toMatch(new RegExp(mockedUser.uniqueId))
		expect(iconImg.getAttribute("alt")).toBe(mockedUser.nickname)
		expect(iconImg.getAttribute("src")).toBe(mockedUser.avatarThumb)
	})
	it("should render error when response rejected", async () => {
		mockedGetUserMe.mockImplementation(() => Promise.reject())
		const { queryByTestId, findByText } = renderWithReduxAndRouter(<Navigation />)

		expect(getUserMe).toBeCalled()
		expect(queryByTestId("account-circle")).toBeInTheDocument()
		const errorElement = await findByText(USER_ERRORS.auth)
		expect(errorElement).toBeInTheDocument()
		expect(queryByTestId("account-circle")).toBeInTheDocument()
	})
})
