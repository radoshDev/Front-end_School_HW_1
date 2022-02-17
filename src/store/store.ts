import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import trendsReducer from "./slices/trendsSlice"
import themeReducer from "./slices/themeSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		trends: trendsReducer,
		theme: themeReducer,
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
