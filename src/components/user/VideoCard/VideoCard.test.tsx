/* eslint-disable react/function-component-definition */
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Video } from "../../../types/usersTypes"
import VideoCard from "./VideoCard"

jest.mock("../../ui/Video", () => () => <video data-testid="video-id" />)

const mockVideoInfo = {
	id: "test1",
	stats: {
		playCount: 150,
		diggCount: 100,
		shareCount: 50,
		commentCount: 10,
	},
	video: {
		cover: "test-cover1",
		playAddr: "test-video-url1",
	},
}

describe("#VideoCard", () => {
	it("should render component", () => {
		render(<VideoCard videoInfo={mockVideoInfo.video as Video} stats={mockVideoInfo.stats} />)
		expect(screen.getByText(`${mockVideoInfo.stats.playCount} views`)).toBeInTheDocument()
		expect(screen.getByTestId("video-cover")).toBeInTheDocument()
		expect(screen.queryByTestId("modal-overlay")).not.toBeInTheDocument()
		expect(screen.queryByTestId("video-id")).not.toBeInTheDocument()
	})
	it("should show video when hover on cover", () => {
		render(<VideoCard videoInfo={mockVideoInfo.video as Video} stats={mockVideoInfo.stats} />)

		const coverElement = screen.getByTestId("video-cover")
		expect(coverElement).toBeInTheDocument()
		expect(screen.queryByTestId("video-id")).not.toBeInTheDocument()
		userEvent.hover(coverElement)
		expect(screen.queryByTestId("video-id")).toBeInTheDocument()
		userEvent.unhover(coverElement)
		expect(screen.queryByTestId("video-id")).not.toBeInTheDocument()
	})
	it("should show modal when clicked at video cover", () => {
		render(<VideoCard videoInfo={mockVideoInfo.video as Video} stats={mockVideoInfo.stats} />)

		const coverElement = screen.getByTestId("video-cover")
		expect(coverElement).toBeInTheDocument()
		expect(screen.queryByTestId("modal-overlay")).not.toBeInTheDocument()
		userEvent.click(coverElement)
		expect(screen.getByTestId("modal-overlay")).toBeInTheDocument()
	})
})
