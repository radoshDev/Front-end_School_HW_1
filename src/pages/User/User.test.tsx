/* eslint-disable react/function-component-definition */
import { getUserInfo } from "../../services/user/getUserInfo"
import { USER_ERRORS } from "../../store/slices/constants"
import { renderWithRedux } from "../../test/helper/renderWithRedux"
import { withMemoryRouter, OptionsMemoryRouter } from "../../test/helper/withMemoryRounter"
import { UserInfo } from "../../types/usersTypes"
import { ROUTES } from "../router"
import User from "./User"

jest.mock("../../components/user/VideoGrid", () => () => <div>VideoGrid component</div>)

jest.mock("../../services/user/getUserInfo", () => ({
	getUserInfo: jest.fn(),
}))
const mockGetUserInfo = getUserInfo as jest.MockedFunction<typeof getUserInfo>
let spy: jest.SpyInstance<void, [x: number, y: number]>
const mockResponse = {
	user: {
		avatarMedium: "test-avatar-url",
		nickname: "test-nickname",
		uniqueId: "test-id",
		verified: true,
		signature: "test-signature",
	},
	stats: {
		followerCount: 150,
		followingCount: 100,
		heartCount: 50,
	},
}
describe("#User", () => {
	beforeAll(() => {
		spy = jest.spyOn(window, "scrollTo").mockImplementation(jest.fn())
	})
	const mockUserId = "test321"
	const options: OptionsMemoryRouter = {
		initialPath: `${ROUTES.account}/${mockUserId}`,
		routePath: `${ROUTES.account}/:id`,
	}
	it("should show preloader", async () => {
		mockGetUserInfo.mockImplementation(() => Promise.resolve(mockResponse as unknown as UserInfo))
		const { getAllByTestId } = renderWithRedux(withMemoryRouter(<User />, options))
		expect(spy).toBeCalledWith(0, 0)
		expect(mockGetUserInfo).toBeCalledWith(mockUserId, expect.anything())
		expect(getAllByTestId("rectangle-preloader").length).toBeGreaterThan(2)
	})
	it("should show User info when response fulfilled", async () => {
		mockGetUserInfo.mockImplementation(() => Promise.resolve(mockResponse as unknown as UserInfo))
		const { queryAllByTestId, findByAltText, queryByText } = renderWithRedux(
			withMemoryRouter(<User />, options)
		)
		expect(spy).toBeCalledWith(0, 0)
		expect(mockGetUserInfo).toBeCalledWith(mockUserId, expect.anything())
		expect(queryAllByTestId("rectangle-preloader").length).toBeGreaterThan(2)
		expect(queryByText(`${mockResponse.stats.followingCount} Following`)).not.toBeInTheDocument()
		const avatarImage = await findByAltText(mockResponse.user.nickname)
		expect(avatarImage).toBeInTheDocument()
		expect(queryAllByTestId("rectangle-preloader").length).toBe(0)
	})
	it("should show error message when response rejected", async () => {
		mockGetUserInfo.mockImplementation(() => Promise.reject())
		const { queryAllByTestId, queryByText, findByText } = renderWithRedux(
			withMemoryRouter(<User />, options)
		)
		expect(mockGetUserInfo).toBeCalledWith(mockUserId, expect.anything())
		expect(queryAllByTestId("rectangle-preloader").length).toBeGreaterThan(1)
		const errorElement = await findByText(USER_ERRORS.info)
		expect(errorElement).toBeInTheDocument()
		expect(queryAllByTestId("rectangle-preloader").length).toBe(0)
		expect(queryByText("VideoGrid component")).not.toBeInTheDocument()
	})
	it("should not call #getUserInfo when id from parameters doesn't exist", () => {
		mockGetUserInfo.mockImplementation(() => Promise.resolve(mockResponse as unknown as UserInfo))
		renderWithRedux(withMemoryRouter(<User />))
		expect(mockGetUserInfo).not.toBeCalled()
	})
})
