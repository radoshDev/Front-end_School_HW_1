/* eslint-disable @typescript-eslint/no-floating-promises */
import { AxiosResponse } from "axios"
import { userFeedGet } from "../../api/userFeedGet"
import { UserTrends } from "../../types/usersTypes"
import { getUserFeeds } from "./getUserFeeds"

jest.mock("../../api/userFeedGet", () => ({
	userFeedGet: jest.fn(),
}))

const mockUserFeedGet = userFeedGet as jest.MockedFunction<typeof userFeedGet>

describe("#getUserFeeds", () => {
	const mockResponse = { data: [] }
	const mockUserId = "dave.xp"
	it("should call #userFeedGet", async () => {
		mockUserFeedGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<UserTrends>)
		)
		await getUserFeeds(mockUserId)
		expect(userFeedGet).toBeCalledWith(mockUserId)
	})
	it("should return response from 'data' property", async () => {
		mockUserFeedGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<UserTrends>)
		)

		expect(await getUserFeeds(mockUserId)).toBe(mockResponse.data)
	})
	it("should throw error when promise rejected", async () => {
		mockUserFeedGet.mockImplementation(() => Promise.reject(new Error("Test error")))

		expect(async () => {
			await getUserFeeds(mockUserId)
		}).rejects.toThrow("Test error")
	})
	it("should throw error when api return string data", async () => {
		const mockWrongResponse = { data: "Something wrong" }
		mockUserFeedGet.mockImplementation(() =>
			Promise.resolve(mockWrongResponse as unknown as AxiosResponse<UserTrends>)
		)

		expect(async () => {
			await getUserFeeds(mockUserId)
		}).rejects.toThrow(mockWrongResponse.data)
	})
	it("should throw error when api return error property", async () => {
		const mockWrongResponse = { data: { error: "Something wrong" } }
		mockUserFeedGet.mockImplementation(() =>
			Promise.resolve(mockWrongResponse as unknown as AxiosResponse<UserTrends>)
		)

		expect(async () => {
			await getUserFeeds(mockUserId)
		}).rejects.toThrow(mockWrongResponse.data.error)
	})
})
