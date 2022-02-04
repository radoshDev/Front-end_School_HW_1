import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getUserFeeds } from "../../services/user/getUserFeeds"
import { getUserInfo } from "../../services/user/getUserInfo"
import { getUserMe } from "../../services/user/getUserMe"
import { Trends } from "../../types/trendsTypes"
import { User, UserInfo } from "../../types/usersTypes"
import { USER_ERRORS } from "./constants"

export const authUser = createAsyncThunk("authUser", getUserMe)
export const loadUserInfo = createAsyncThunk("loadUserInfo", getUserInfo)
export const loadUserFeed = createAsyncThunk("loadUserFeed", getUserFeeds)

type State = typeof initialState
const initialState = {
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
		data: [] as Trends,
		isLoading: true,
		error: "",
	},
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(authUser.pending, (state: State) => {
				state.auth.isLoading = true
				state.auth.error = ""
			})
			.addCase(authUser.fulfilled, (state: State, action: PayloadAction<User>) => {
				if (action.payload) {
					state.auth.data = action.payload
				}
				state.auth.isLoading = false
				state.auth.error = ""
			})
			.addCase(authUser.rejected, (state: State) => {
				state.auth.error = USER_ERRORS.auth
				state.auth.isLoading = false
			})
			.addCase(loadUserInfo.pending, (state: State) => {
				state.info.isLoading = true
				state.info.error = ""
			})
			.addCase(loadUserInfo.fulfilled, (state: State, action: PayloadAction<UserInfo>) => {
				state.info.data = action.payload
				state.info.isLoading = false
				state.info.error = ""
			})
			.addCase(loadUserInfo.rejected, (state: State) => {
				state.info.error = USER_ERRORS.info
				state.info.isLoading = false
			})
			.addCase(loadUserFeed.pending, (state: State) => {
				state.feed.isLoading = true
				state.feed.error = ""
			})
			.addCase(loadUserFeed.fulfilled, (state: State, action: PayloadAction<Trends>) => {
				state.feed.data = action.payload
				state.feed.isLoading = false
			})
			.addCase(loadUserFeed.rejected, (state: State) => {
				state.feed.error = USER_ERRORS.feeds
				state.feed.isLoading = false
			}),
})

export default userSlice.reducer
