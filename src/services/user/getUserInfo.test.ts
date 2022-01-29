/* eslint-disable @typescript-eslint/no-floating-promises */
import { AxiosResponse } from "axios"
import { userInfoGet } from "../../api/userInfoGet"
import { UserInfo } from "../../types/usersTypes"
import { getUserInfo } from "./getUserInfo"

jest.mock("../../api/userInfoGet", () => ({
	userInfoGet: jest.fn(),
}))

const mockUserInfoGet = userInfoGet as jest.MockedFunction<typeof userInfoGet>

describe("#getUserInfo", () => {
	const mockResponse = { data: "test" }
	const mockUsername = "test-user"
	it("should call #userInfoGet", async () => {
		mockUserInfoGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<UserInfo>)
		)
		await getUserInfo(mockUsername)
		expect(userInfoGet).toBeCalledWith(mockUsername)
	})
	it("should return response from 'data' property", async () => {
		mockUserInfoGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<UserInfo>)
		)

		expect(await getUserInfo(mockUsername)).toBe(mockResponse.data)
	})
	it("should throw error when promise rejected", async () => {
		mockUserInfoGet.mockImplementation(() => Promise.reject(new Error("Test error")))

		expect(async () => {
			await getUserInfo(mockUsername)
		}).rejects.toThrow("Test error")
	})
})
