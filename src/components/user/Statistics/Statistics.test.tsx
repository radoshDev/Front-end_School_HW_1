/* eslint-disable react/jsx-boolean-value */
import { render, screen } from "@testing-library/react"
import { Stats } from "../../../types/usersTypes"
import Statistics from "./Statistics"

const mockStats: Pick<Stats, "followerCount" | "followingCount" | "heartCount"> = {
	followerCount: 150,
	followingCount: 200,
	heartCount: 50,
}

describe("#Statistics", () => {
	it("should render content when isLoading falsy", () => {
		render(<Statistics isLoading={false} stats={mockStats as Stats} />)

		expect(screen.getByText(/following/i)).toBeInTheDocument()
		expect(screen.getByText(/followers/i)).toBeInTheDocument()
		expect(screen.getByText(/likes/i)).toBeInTheDocument()
		expect(screen.getByText(mockStats.followerCount)).toBeInTheDocument()
		expect(screen.getByText(mockStats.followingCount)).toBeInTheDocument()
		expect(screen.getByText(mockStats.heartCount)).toBeInTheDocument()
	})
	it("should render preloader when isLoading truthy", () => {
		render(<Statistics isLoading={true} stats={mockStats as Stats} />)

		expect(screen.getByTestId(/preloader/i)).toBeInTheDocument()
		expect(screen.queryByText(/followers/i)).not.toBeInTheDocument()
	})
})
