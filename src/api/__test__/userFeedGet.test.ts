/* eslint-disable @typescript-eslint/no-floating-promises */
import { apiGet } from "../api"
import { userFeedGet, USER_FEED_URL } from "../userFeedGet"

jest.mock("../api", () => {
	return {
		apiGet: jest.fn(),
	}
})

describe("#trendsFeedGet", () => {
	it("should call apiGet with '/trending/feed'", () => {
		userFeedGet()
		expect(apiGet).toBeCalledWith(USER_FEED_URL)
	})
})
