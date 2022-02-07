import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type State = {
	themeValue: "light" | "dark"
}

const initialState: State = {
	themeValue: "light",
}

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state: State, action: PayloadAction<State["themeValue"]>) => {
			state.themeValue = action.payload
		},
	},
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
