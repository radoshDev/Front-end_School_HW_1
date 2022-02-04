/* eslint-disable @typescript-eslint/no-floating-promises */
import { trendsFeedGet, TREND_FEED_URL } from "../trendsFeedGet"
import { apiGet } from "../api"

jest.mock("../api", () => {
	return {
		apiGet: jest.fn(),
	}
})

describe("#trendsFeedGet", () => {
	it("should call apiGet with '/trending/feed'", () => {
		trendsFeedGet()
		expect(apiGet).toBeCalledWith(TREND_FEED_URL)
	})
})
