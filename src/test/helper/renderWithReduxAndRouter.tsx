/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Action, configureStore, Store } from "@reduxjs/toolkit"
import { render } from "@testing-library/react"
import { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { RootState } from "../../store/store"
import userReducer from "../../store/slices/userSlice"
import trendsReducer from "../../store/slices/trendsSlice"

type RenderWithReduxProps = {
	preloadedState?: RootState
	store?: Store<RootState, Action<string>>
	route?: string
}

export const renderWithReduxAndRouter = (
	ui: ReactElement,
	{
		preloadedState,
		store = configureStore({
			reducer: { user: userReducer, trends: trendsReducer },
			preloadedState,
		}),
		route = "/",
	}: RenderWithReduxProps = {}
) => {
	window.history.pushState({}, "Test page", route)
	const Wrapper = ({ children }: { children: ReactNode }) => (
		<BrowserRouter>
			<Provider store={store}>{children}</Provider>
		</BrowserRouter>
	)

	return render(ui, { wrapper: Wrapper })
}
