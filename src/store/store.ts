import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import trendsReducer from "./slices/trendsSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		trends: trendsReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
