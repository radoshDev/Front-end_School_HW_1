import { ROUTES } from "../../../pages/router"
import { getUserFeeds } from "../../../services/user/getUserFeeds"
import { USER_ERRORS } from "../../../store/slices/constants"
import { renderWithRedux } from "../../../test/helper/renderWithRedux"
import { OptionsMemoryRouter, withMemoryRouter } from "../../../test/helper/withMemoryRounter"
import { Trends } from "../../../types/trendsTypes"
import VideoGrid from "./VideoGrid"

jest.mock("../../../services/user/getUserFeeds", () => {
	return {
		getUserFeeds: jest.fn(() => Promise.resolve([])),
	}
})

const mockedGetUserFeeds = getUserFeeds as jest.MockedFunction<typeof getUserFeeds>

const mockFeeds = [
	{
		id: "test1",
		playCount: 150,
		covers: {
			default: "test-cover1",
			dynamic: "",
			origin: "",
		},
		videoUrl: "test-video-url1",
	},
]

describe("#VideoGrid", () => {
	const mockUserId = "test211"
	const pathOptions: OptionsMemoryRouter = {
		initialPath: `${ROUTES.account}/${mockUserId}`,
		routePath: `${ROUTES.account}/:id`,
	}
	it("should render preloader when request is pending", async () => {
		mockedGetUserFeeds.mockImplementation(() => Promise.resolve([]))

		const { getAllByTestId } = renderWithRedux(withMemoryRouter(<VideoGrid />, pathOptions))
		expect(getAllByTestId("rectangle-preloader").length).toBeGreaterThan(1)
		expect(getUserFeeds).toBeCalled()
	})
	it("should render feeds when request fulfilled", async () => {
		mockedGetUserFeeds.mockImplementation(() => Promise.resolve(mockFeeds as Trends))
		const { queryAllByTestId, findAllByTestId, getByText } = renderWithRedux(
			withMemoryRouter(<VideoGrid />, pathOptions)
		)
		expect(queryAllByTestId("rectangle-preloader").length).toBeGreaterThan(1)
		const coverElements = await findAllByTestId("video-cover")
		expect(coverElements.length).toBe(mockFeeds.length)
		expect(getByText(`${mockFeeds[0].playCount} views`)).toBeInTheDocument()
		expect(queryAllByTestId("rectangle-preloader").length).toBe(0)
	})
	it("should render error element when request rejected", async () => {
		mockedGetUserFeeds.mockImplementation(() => Promise.reject())
		const { queryAllByTestId, findByText } = renderWithRedux(
			withMemoryRouter(<VideoGrid />, pathOptions)
		)
		expect(queryAllByTestId("rectangle-preloader").length).toBeGreaterThan(1)
		const errorElement = await findByText(USER_ERRORS.feeds)
		expect(errorElement).toBeInTheDocument()
		expect(queryAllByTestId("rectangle-preloader").length).toBe(0)
	})
})
