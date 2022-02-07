/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Action, configureStore, Store } from "@reduxjs/toolkit"
import { render } from "@testing-library/react"
import { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"
import { RootState } from "../../store/store"
import userReducer from "../../store/slices/userSlice"
import trendsReducer from "../../store/slices/trendsSlice"
import themeReducer from "../../store/slices/themeSlice"

type RenderWithReduxProps = {
	preloadedState?: RootState
	store?: Store<RootState, Action<string>>
}

export const renderWithRedux = (
	ui: ReactElement,
	{
		preloadedState,
		store = configureStore({
			reducer: { user: userReducer, trends: trendsReducer, theme: themeReducer },
			preloadedState,
		}),
	}: RenderWithReduxProps = {}
) => {
	const Wrapper = ({ children }: { children: ReactNode }) => (
		<Provider store={store}>{children}</Provider>
	)

	return render(ui, { wrapper: Wrapper })
}
