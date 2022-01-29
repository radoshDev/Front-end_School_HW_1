import { AnyAction } from "@reduxjs/toolkit"
import { TRENDS_ERRORS } from "./constants"
import reducer, { loadTrends, setMutedAll } from "./trendsSlice"

const mockInitialState = {
	data: [],
	isLoading: true,
	error: "",
	isMuted: true,
}

describe("#trendsSlice", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {} as AnyAction)).toEqual(mockInitialState)
	})

	it("should change isMuted property when action setMutedAll", () => {
		expect(reducer(mockInitialState, setMutedAll())).toHaveProperty("isMuted", false)
	})
	it("should set loading true while action is pending", () => {
		const action = { type: loadTrends.pending }
		expect(reducer(mockInitialState, action)).toEqual({
			data: [],
			isLoading: true,
			error: "",
			isMuted: true,
		})
	})
	it("should set data when action fulfilled", () => {
		const mockPayload = [{ id: "test-id" }]
		const action = { type: loadTrends.fulfilled, payload: mockPayload }
		expect(reducer(mockInitialState, action)).toEqual({
			data: mockPayload,
			isLoading: false,
			error: "",
			isMuted: true,
		})
	})
	it("should set error when action rejected", () => {
		const action = { type: loadTrends.rejected }
		expect(reducer(mockInitialState, action)).toEqual({
			data: [],
			isLoading: false,
			error: TRENDS_ERRORS.trends,
			isMuted: true,
		})
	})
})
