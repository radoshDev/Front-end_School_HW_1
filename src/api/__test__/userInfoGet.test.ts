/* eslint-disable @typescript-eslint/no-floating-promises */
import { apiGet } from "api/api"
import { userInfoGet, USER_INFO_PATH } from "../userInfoGet"

jest.mock("../api", () => {
	return {
		apiGet: jest.fn(),
	}
})

describe("#userInfoGet", () => {
	it("should call 'apiGet' with right path", () => {
		const user = "test-data"
		userInfoGet(user)
		expect(apiGet).toBeCalledWith(`${USER_INFO_PATH}${user}`)
	})
})
