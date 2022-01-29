import { getTrends } from "../../services/trends/getTrends"
import { TRENDS_ERRORS } from "../../store/slices/constants"
import { renderWithRedux } from "../../test/helper/renderWithRedux"
import { Trends } from "../../types/trendsTypes"
import TrendsPage from "./Trends"

jest.mock("../../services/trends/getTrends", () => ({
	getTrends: jest.fn(),
}))
// eslint-disable-next-line react/function-component-definition
jest.mock("../../components/trends/Card", () => () => <div>Card component</div>)

const mockGetTrends = getTrends as jest.MockedFunction<typeof getTrends>
const mockResponse = [
	{ id: "1" },
	{ id: "2" },
	{ id: "3" },
	{ id: "4" },
	{ id: "5" },
	{ id: "6" },
	{ id: "7" },
	{ id: "8" },
	{ id: "9" },
]
let spy: jest.SpyInstance<void, [x: number, y: number]>
describe("#Trends", () => {
	beforeAll(() => {
		spy = jest.spyOn(window, "scrollTo").mockImplementation(jest.fn())
	})
	it("should show preloader", async () => {
		mockGetTrends.mockImplementation(() => Promise.resolve(mockResponse as Trends))
		const { getAllByTestId } = renderWithRedux(<TrendsPage />)
		expect(spy).toBeCalledWith(0, 0)
		expect(mockGetTrends).toBeCalled()
		expect(getAllByTestId("rectangle-preloader").length).toBeGreaterThan(1)
	})
	it("should show Cards when response fulfilled", async () => {
		mockGetTrends.mockImplementation(() => Promise.resolve(mockResponse as Trends))
		const trendsPerPage = 5
		const { queryAllByTestId, findAllByText } = renderWithRedux(<TrendsPage />)
		expect(spy).toBeCalledWith(0, 0)
		expect(mockGetTrends).toBeCalled()
		expect(queryAllByTestId("rectangle-preloader").length).toBeGreaterThan(1)
		const cards = await findAllByText("Card component")
		expect(cards.length).toBeLessThanOrEqual(trendsPerPage)
		expect(queryAllByTestId("rectangle-preloader").length).toBe(0)
	})
	it("should show error message when response rejected", async () => {
		mockGetTrends.mockImplementation(() => Promise.reject())
		const { queryAllByTestId, findByText, queryByText } = renderWithRedux(<TrendsPage />)
		expect(spy).toBeCalledWith(0, 0)
		expect(mockGetTrends).toBeCalled()
		expect(queryAllByTestId("rectangle-preloader").length).toBeGreaterThan(1)
		const errorElement = await findByText(TRENDS_ERRORS.trends)
		expect(errorElement).toBeInTheDocument()
		expect(queryAllByTestId("rectangle-preloader").length).toBe(0)
		expect(queryByText("Card component")).not.toBeInTheDocument()
	})
})
