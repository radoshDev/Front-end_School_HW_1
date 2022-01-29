import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTrends } from "../../services/trends/getTrends"
import { Trends } from "../../types/trendsTypes"
import { TRENDS_ERRORS } from "./constants"

export const loadTrends = createAsyncThunk("loadTrends", getTrends)

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
				state.error = TRENDS_ERRORS.trends
				state.isLoading = false
			})
	},
})

export const { setMutedAll } = trendsSlice.actions

export default trendsSlice.reducer
