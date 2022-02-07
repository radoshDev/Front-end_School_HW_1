import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTrends } from "../../services/trends/getTrends"
import { Trends } from "../../types/trendsTypes"
import { TRENDS_ERRORS } from "./constants"

export const loadTrends = createAsyncThunk("loadTrends", getTrends)

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
		setMutedAll: state => {
			state.isMuted = !state.isMuted
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loadTrends.pending, state => {
				state.isLoading = true
				state.error = ""
			})
			.addCase(loadTrends.fulfilled, (state, action: PayloadAction<Trends>) => {
				state.data = action.payload
				state.isLoading = false
				state.error = ""
			})
			.addCase(loadTrends.rejected, state => {
				state.error = TRENDS_ERRORS.trends
				state.isLoading = false
			})
	},
})

export const { setMutedAll } = trendsSlice.actions

export default trendsSlice.reducer
