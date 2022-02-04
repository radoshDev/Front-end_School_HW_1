/* eslint-disable @typescript-eslint/no-floating-promises */
import { AxiosResponse } from "axios"
import { userFeedGet } from "../../api/userFeedGet"
import { Trends } from "../../types/trendsTypes"
import { getUserFeeds } from "./getUserFeeds"

jest.mock("../../api/userFeedGet", () => ({
	userFeedGet: jest.fn(),
}))

const mockUserFeedGet = userFeedGet as jest.MockedFunction<typeof userFeedGet>

describe("#getUserFeeds", () => {
	const mockResponse = { data: "test" }
	it("should call #userFeedGet", async () => {
		mockUserFeedGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<Trends>)
		)
		await getUserFeeds()
		expect(userFeedGet).toBeCalled()
	})
	it("should return response from 'data' property", async () => {
		mockUserFeedGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<Trends>)
		)

		expect(await getUserFeeds()).toBe(mockResponse.data)
	})
	it("should throw error when promise rejected", async () => {
		mockUserFeedGet.mockImplementation(() => Promise.reject(new Error("Test error")))

		expect(async () => {
			await getUserFeeds()
		}).rejects.toThrow("Test error")
	})
})
