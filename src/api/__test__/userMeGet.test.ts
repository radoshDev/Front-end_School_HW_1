/* eslint-disable @typescript-eslint/no-floating-promises */
import { apiGet } from "../api"
import { userMeGet, USER_ME_PATH } from "../userMeGet"

jest.mock("../api", () => {
	return {
		apiGet: jest.fn(),
	}
})

describe("#trendsFeedGet", () => {
	it("should call apiGet with right path", () => {
		userMeGet()
		expect(apiGet).toBeCalledWith(USER_ME_PATH)
	})
})
