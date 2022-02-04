/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Video from "./Video"

describe("#Video", () => {
	it("should render video tag without props", () => {
		const { container } = render(<Video />)
		expect(container.querySelector("video")).toBeInTheDocument()
		expect(container.querySelector("video")?.src).toBe("")
		expect(container.querySelector("video")?.muted).toBe(true)
		expect(container.querySelector("video")?.loop).toBe(true)
	})
	it("should render video tag with props", () => {
		const { container } = render(<Video url="test-url" />)
		const video = container.querySelector("video")
		expect(video).toBeInTheDocument()
		expect(video?.src).toMatch(/test-url/)
		expect(video?.muted).toBe(true)
		expect(screen.getByTestId("icon-muted")).toBeInTheDocument()
		expect(screen.queryByTestId("icon-unmuted")).not.toBeInTheDocument()
		expect(video?.loop).toBe(true)
	})
	it("should auto play video when loaded", () => {
		const { container } = render(<Video url="test-url" />)
		const video = container.querySelector("video")
		let spy
		if (video) {
			spy = jest.spyOn(video, "play")
			fireEvent.loadedData(video)
			expect(spy).toBeCalledTimes(1)
		} else {
			throw new Error("video is undefined")
		}
	})
	it("should play icon change to pause icon when video loaded", async () => {
		const { container } = render(<Video url="test-url" />)
		const video = container.querySelector("video")
		if (video) {
			expect(screen.getByTestId("icon-play")).toBeInTheDocument()
			fireEvent.loadedData(video)
			expect(await screen.findByTestId("icon-pause")).toBeInTheDocument()
			expect(screen.queryByTestId("icon-play")).not.toBeInTheDocument()
		} else {
			throw new Error("video is undefined")
		}
	})
	it("should toggle mute/unmute icons when clicking", () => {
		render(<Video url="test-url" />)

		expect(screen.getByTestId("icon-muted")).toBeInTheDocument()
		userEvent.click(screen.getByTestId("icon-muted"))
		expect(screen.getByTestId("icon-unmuted")).toBeInTheDocument()
		expect(screen.queryByTestId("icon-muted")).not.toBeInTheDocument()
		userEvent.click(screen.getByTestId("icon-unmuted"))
		expect(screen.getByTestId("icon-muted")).toBeInTheDocument()
		expect(screen.queryByTestId("icon-unmuted")).not.toBeInTheDocument()
	})
})
