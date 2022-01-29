/* eslint-disable @typescript-eslint/no-floating-promises */
import { AxiosResponse } from "axios"
import { userMeGet } from "../../api/userMeGet"
import { UserInfo } from "../../types/usersTypes"
import { getUserMe } from "./getUserMe"

jest.mock("../../api/userMeGet", () => ({
	userMeGet: jest.fn(),
}))

const mockUserMeGet = userMeGet as jest.MockedFunction<typeof userMeGet>

describe("#getUserMe", () => {
	const mockResponse = {
		data: {
			user: "test-user",
		},
	}
	it("should call #userMeGet", async () => {
		mockUserMeGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<UserInfo>)
		)
		await getUserMe()
		expect(userMeGet).toBeCalled()
	})
	it("should return response from 'data' property", async () => {
		mockUserMeGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<UserInfo>)
		)

		expect(await getUserMe()).toBe(mockResponse.data.user)
	})
	it("should throw error when promise rejected", async () => {
		mockUserMeGet.mockImplementation(() => Promise.reject(new Error("Test error")))

		expect(async () => {
			await getUserMe()
		}).rejects.toThrow("Test error")
	})
})
