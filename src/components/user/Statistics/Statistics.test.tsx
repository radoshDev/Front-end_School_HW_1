/* eslint-disable react/jsx-boolean-value */
import { screen } from "@testing-library/react"
import { renderWithRedux } from "../../../test/helper/renderWithRedux"
import { withTheme } from "../../../test/helper/withTheme"
import { UserInfo } from "../../../types/usersTypes"
import Statistics from "./Statistics"

const mockStats: Pick<UserInfo["stats"], "followerCount" | "followingCount" | "heartCount"> = {
	followerCount: 150,
	followingCount: 200,
	heartCount: 50,
}

describe("#Statistics", () => {
	it.skip("should render content when isLoading falsy", () => {
		renderWithRedux(withTheme(<Statistics />))

		expect(screen.getByText(/following/i)).toBeInTheDocument()
		expect(screen.getByText(/followers/i)).toBeInTheDocument()
		expect(screen.getByText(/likes/i)).toBeInTheDocument()
		expect(screen.getByText(mockStats.followerCount)).toBeInTheDocument()
		expect(screen.getByText(mockStats.followingCount)).toBeInTheDocument()
		expect(screen.getByText(mockStats.heartCount)).toBeInTheDocument()
	})
	it("should render preloader when isLoading truthy", () => {
		renderWithRedux(withTheme(<Statistics />))

		expect(screen.getByTestId(/preloader/i)).toBeInTheDocument()
		expect(screen.queryByText(/followers/i)).not.toBeInTheDocument()
	})
})
