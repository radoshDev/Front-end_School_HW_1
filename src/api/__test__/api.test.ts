/* eslint-disable @typescript-eslint/no-floating-promises */
import { apiGet, apiInstance } from "../api"

jest.mock("axios", () => {
	return {
		create: () => {
			return {
				get: jest.fn(),
			}
		},
	}
})

const mockApiInstance = apiInstance as jest.Mocked<typeof apiInstance>

describe("#apiGet", () => {
	it("should call get method", async () => {
		mockApiInstance.get.mockImplementation(() => Promise.resolve({ data: "test-data" }))

		const response = await apiGet("test-url")
		expect(mockApiInstance.get).toBeCalledTimes(1)
		expect(mockApiInstance.get).toBeCalledWith("test-url")
		expect(response).toEqual({ data: "test-data" })
	})
})
