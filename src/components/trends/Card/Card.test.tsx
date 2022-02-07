/* eslint-disable react/function-component-definition */
import { Trend } from "../../../types/trendsTypes"
import Card from "./Card"
import { renderWithRouter } from "../../../test/helper/renderWithRouter"
import { withTheme } from "../../../test/helper/withTheme"

jest.mock("../VideoBlock", () => () => <video data-testid="video-mock" />)

const mockTrend = {
	author: {
		avatarThumb: "test-avatar-url",
		uniqueId: "test-name",
		nickName: "test-nickname",
		verified: true,
	},
	desc: "test-description",
	textExtra: [],
	video: { playAddr: "test-url" },
	stats: {
		commentCount: 150,
		diggCount: 500,
	},
}
describe("#Card", () => {
	it("Create integration tests", () => {
		const { getByRole, getByTestId, getByText } = renderWithRouter(
			withTheme(<Card trend={mockTrend as unknown as Trend} />)
		)
		const imgElement = getByRole("img")
		expect(imgElement).toBeInTheDocument()
		expect(imgElement.getAttribute("src")).toBe(mockTrend.author.avatarThumb)
		expect(getByText(mockTrend.desc)).toBeInTheDocument()
		expect(getByTestId("divider")).toBeInTheDocument()
	})
})
