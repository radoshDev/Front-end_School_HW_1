/* eslint-disable @typescript-eslint/no-floating-promises */
import { AxiosResponse } from "axios"
import { trendsFeedGet } from "../../api/trendsFeedGet"
import { Trends } from "../../types/trendsTypes"
import { getTrends } from "./getTrends"

jest.mock("../../api/trendsFeedGet", () => {
	return {
		__esModule: true,
		trendsFeedGet: jest.fn(),
	}
})

const mockTrendsFeedGet = trendsFeedGet as jest.MockedFunction<typeof trendsFeedGet>

describe("#getTrends", () => {
	const mockResponse = { data: [] }
	it("should call #trendsFeedGet", async () => {
		mockTrendsFeedGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<Trends>)
		)
		await getTrends()
		expect(trendsFeedGet).toBeCalled()
	})
	it("should return response from 'data' property", async () => {
		mockTrendsFeedGet.mockImplementation(() =>
			Promise.resolve(mockResponse as unknown as AxiosResponse<Trends>)
		)

		expect(await getTrends()).toBe(mockResponse.data)
	})
	it("should throw error when promise rejected", async () => {
		mockTrendsFeedGet.mockImplementation(() => Promise.reject(new Error("Test error")))

		expect(async () => {
			await getTrends()
		}).rejects.toThrow("Test error")
	})
	it("should throw error when api return string data", async () => {
		const mockWrongResponse = { data: "Something wrong" }
		mockTrendsFeedGet.mockImplementation(() =>
			Promise.resolve(mockWrongResponse as unknown as AxiosResponse<Trends>)
		)

		expect(async () => {
			await getTrends()
		}).rejects.toThrow(mockWrongResponse.data)
	})
	it("should throw error when api return error property", async () => {
		const mockWrongResponse = { data: { error: "Something wrong" } }
		mockTrendsFeedGet.mockImplementation(() =>
			Promise.resolve(mockWrongResponse as unknown as AxiosResponse<Trends>)
		)

		expect(async () => {
			await getTrends()
		}).rejects.toThrow(mockWrongResponse.data.error)
	})
})
