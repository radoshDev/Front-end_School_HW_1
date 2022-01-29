import { AnyAction } from "@reduxjs/toolkit"
import { User, UserInfo } from "../../types/usersTypes"
import { USER_ERRORS } from "./constants"
import reducer, { loadUserFeed, loadUserInfo } from "./userSlice"

const mockInitialState = {
	auth: {
		data: {} as User,
		isLoading: true,
		error: "",
	},
	info: {
		data: {} as UserInfo,
		isLoading: true,
		error: "",
	},
	feed: {
		data: [],
		isLoading: true,
		error: "",
	},
}

describe("#userSlice", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {} as AnyAction)).toEqual(mockInitialState)
	})
	it("should set feed loading true while action is pending", () => {
		const action = { type: loadUserFeed.pending }
		const mockState = {
			auth: {
				data: {} as User,
				isLoading: true,
				error: "",
			},
			info: {
				data: {} as UserInfo,
				isLoading: true,
				error: "",
			},
			feed: {
				data: [],
				isLoading: true,
				error: "",
			},
		}
		expect(reducer(mockInitialState, action)).toEqual(mockState)
	})
	it("should set feed data when action is fulfilled", () => {
		const action = { type: loadUserFeed.fulfilled, payload: [{ id: "test-id" }] }
		const mockState = {
			auth: {
				data: {} as User,
				isLoading: true,
				error: "",
			},
			info: {
				data: {} as UserInfo,
				isLoading: true,
				error: "",
			},
			feed: {
				data: action.payload,
				isLoading: false,
				error: "",
			},
		}
		expect(reducer(mockInitialState, action)).toEqual(mockState)
	})
	it("should set feed error when action rejected", () => {
		const action = { type: loadUserFeed.rejected }
		const mockState = {
			auth: {
				data: {} as User,
				isLoading: true,
				error: "",
			},
			info: {
				data: {} as UserInfo,
				isLoading: true,
				error: "",
			},
			feed: {
				data: [],
				isLoading: false,
				error: USER_ERRORS.feeds,
			},
		}
		expect(reducer(mockInitialState, action)).toEqual(mockState)
	})
	it("should set info loading true while action is pending", () => {
		const action = { type: loadUserInfo.pending }
		const mockState = {
			auth: {
				data: {} as User,
				isLoading: true,
				error: "",
			},
			info: {
				data: {} as UserInfo,
				isLoading: true,
				error: "",
			},
			feed: {
				data: [],
				isLoading: true,
				error: "",
			},
		}
		expect(reducer(mockInitialState, action)).toEqual(mockState)
	})
	it("should set info data when action is fulfilled", () => {
		const action = { type: loadUserInfo.fulfilled, payload: { user: "test-user" } }
		const mockState = {
			auth: {
				data: {} as User,
				isLoading: true,
				error: "",
			},
			info: {
				data: action.payload,
				isLoading: false,
				error: "",
			},
			feed: {
				data: [],
				isLoading: true,
				error: "",
			},
		}
		expect(reducer(mockInitialState, action)).toEqual(mockState)
	})
	it("should set info error when action rejected", () => {
		const action = { type: loadUserInfo.rejected }
		const mockState = {
			auth: {
				data: {} as User,
				isLoading: true,
				error: "",
			},
			info: {
				data: {} as UserInfo,
				isLoading: false,
				error: USER_ERRORS.info,
			},
			feed: {
				data: [],
				isLoading: true,
				error: "",
			},
		}
		expect(reducer(mockInitialState, action)).toEqual(mockState)
	})
})
