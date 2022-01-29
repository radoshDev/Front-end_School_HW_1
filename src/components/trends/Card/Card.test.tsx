/* eslint-disable react/function-component-definition */
import { Trend } from "../../../types/trendsTypes"
import Card from "./Card"
import { renderWithRouter } from "../../../test/helper/renderWithRouter"

jest.mock("../VideoBlock", () => () => <video data-testid="video-mock" />)

const mockTrend = {
	authorMeta: {
		avatar: "test-avatar-url",
		name: "test-name",
		nickName: "test-nickname",
		verified: true,
	},
	text: "test-description",
	hashtags: [],
	videoUrl: "test-url",
	commentCount: 150,
	diggCount: 500,
}
describe("#Card", () => {
	it("Create integration tests", () => {
		const { getByRole, getByTestId, getByText } = renderWithRouter(
			<Card trend={mockTrend as unknown as Trend} />
		)
		const imgElement = getByRole("img")
		expect(imgElement).toBeInTheDocument()
		expect(imgElement.getAttribute("src")).toBe(mockTrend.authorMeta.avatar)
		expect(getByText(mockTrend.text)).toBeInTheDocument()
		expect(getByTestId("divider")).toBeInTheDocument()
	})
})
