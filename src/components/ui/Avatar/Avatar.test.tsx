import { render, screen } from "@testing-library/react"
import Avatar, { AvatarProps } from "./Avatar"

describe("#Avatar", () => {
	it("should render preloader when truthy isLoading", () => {
		render(<Avatar {...({ isLoading: true } as AvatarProps)} />)
		expect(screen.getByTestId("rectangle-preloader")).toBeInTheDocument()
		expect(screen.queryByRole("img")).not.toBeInTheDocument()
	})
	it("should render img when truthy isLoading", () => {
		const mockProps: AvatarProps = {
			altText: "test-alt-text",
			avatarUrl: "test-url",
			size: 40,
			isLoading: false,
		}
		render(<Avatar {...mockProps} />)

		expect(screen.getByAltText(mockProps.altText)).toBeInTheDocument()
		expect(screen.getByRole("img").getAttribute("src")).toBe(mockProps.avatarUrl)
		expect(screen.queryByTestId("rectangle-preloader")).not.toBeInTheDocument()
	})
	it("should render img unless isLoading is passed", () => {
		const mockProps: AvatarProps = {
			altText: "test-alt-text",
			avatarUrl: "test-url",
			size: 40,
		}
		render(<Avatar {...mockProps} />)

		expect(screen.getByAltText(mockProps.altText)).toBeInTheDocument()
		expect(screen.getByRole("img").getAttribute("src")).toBe(mockProps.avatarUrl)
		expect(screen.queryByTestId("rectangle-preloader")).not.toBeInTheDocument()
	})
})
