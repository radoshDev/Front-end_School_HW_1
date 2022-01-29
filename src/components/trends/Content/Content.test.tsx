/* eslint-disable react/function-component-definition */
import { render, screen } from "@testing-library/react"
import Content, { ContentProps } from "./Content"

jest.mock("../VideoBlock", () => () => <video data-testid="video-block" />)

describe("#Content", () => {
	it("should render video, action bar components", () => {
		const mockProps: ContentProps = {
			commentCount: 50,
			likeCount: 450,
			videoUrl: "test-video-url",
		}
		render(<Content {...mockProps} />)
		expect(screen.getByTestId("video-block")).toBeInTheDocument()
		expect(screen.getByText(mockProps.commentCount)).toBeInTheDocument()
		expect(screen.getByText(mockProps.likeCount)).toBeInTheDocument()
	})
})
