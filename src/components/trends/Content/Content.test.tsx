/* eslint-disable react/function-component-definition */
import { render, screen } from "@testing-library/react"
import { withTheme } from "../../../test/helper/withTheme"
import Content, { ContentProps } from "./Content"

jest.mock("../VideoBlock", () => () => <video data-testid="video-block" />)

describe("#Content", () => {
	it("should render video, action bar components", () => {
		const mockProps: ContentProps = {
			commentCount: 50,
			likeCount: 450,
			videoUrl: "test-video-url",
		}
		render(withTheme(<Content {...mockProps} />))
		expect(screen.getByTestId("video-block")).toBeInTheDocument()
		expect(screen.getByText(mockProps.commentCount)).toBeInTheDocument()
		expect(screen.getByText(mockProps.likeCount)).toBeInTheDocument()
	})
})
