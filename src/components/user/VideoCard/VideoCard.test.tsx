/* eslint-disable react/function-component-definition */
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Trend } from "../../../types/trendsTypes"
import VideoCard from "./VideoCard"

jest.mock("../../ui/Video", () => () => <video data-testid="video-id" />)

const mockVideoInfo: Pick<Trend, "playCount" | "covers" | "videoUrl"> = {
	playCount: 150,
	videoUrl: "test-video-url",
	covers: {
		default: "test-cover",
		dynamic: "",
		origin: "",
	},
}

describe("#VideoCard", () => {
	it("should render component", () => {
		render(<VideoCard videoInfo={mockVideoInfo as Trend} />)
		expect(screen.getByText(`${mockVideoInfo.playCount} views`)).toBeInTheDocument()
		expect(screen.getByTestId("video-cover")).toBeInTheDocument()
		expect(screen.queryByTestId("modal-overlay")).not.toBeInTheDocument()
		expect(screen.queryByTestId("video-id")).not.toBeInTheDocument()
	})
	it("should show video when hover on cover", () => {
		render(<VideoCard videoInfo={mockVideoInfo as Trend} />)

		const coverElement = screen.getByTestId("video-cover")
		expect(coverElement).toBeInTheDocument()
		expect(screen.queryByTestId("video-id")).not.toBeInTheDocument()
		userEvent.hover(coverElement)
		expect(screen.queryByTestId("video-id")).toBeInTheDocument()
		userEvent.unhover(coverElement)
		expect(screen.queryByTestId("video-id")).not.toBeInTheDocument()
	})
	it("should show modal when clicked at video cover", () => {
		render(<VideoCard videoInfo={mockVideoInfo as Trend} />)

		const coverElement = screen.getByTestId("video-cover")
		expect(coverElement).toBeInTheDocument()
		expect(screen.queryByTestId("modal-overlay")).not.toBeInTheDocument()
		userEvent.click(coverElement)
		expect(screen.getByTestId("modal-overlay")).toBeInTheDocument()
	})
})
