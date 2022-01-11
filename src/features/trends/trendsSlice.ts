import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TrendsAPI } from "features/trends/trendsAPI"
import { Trends } from "types/trendsTypes"

export const loadTrends = createAsyncThunk("loadTrends", TrendsAPI.getFeed)
type State = typeof initialState
const initialState = {
	data: [] as Trends,
	isLoading: true,
	error: "",
	isMuted: true,
}

const trendsSlice = createSlice({
	name: "trends",
	initialState,
	reducers: {
		setMutedAll: (state: State) => {
			state.isMuted = !state.isMuted
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loadTrends.pending, (state: State) => {
				state.isLoading = true
				state.error = ""
			})
			.addCase(loadTrends.fulfilled, (state: State, action: PayloadAction<Trends>) => {
				state.data = action.payload
				state.isLoading = false
				state.error = ""
			})
			.addCase(loadTrends.rejected, (state: State) => {
				state.error = "Download Videos Failed! Please retry later"
				state.isLoading = false
			})
	},
})

export const { setMutedAll } = trendsSlice.actions

export default trendsSlice.reducer
