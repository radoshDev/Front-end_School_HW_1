import { ReactElement } from "react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

export type OptionsMemoryRouter = { routePath?: string; initialPath?: string }
type WithMemoryRouter = (component: ReactElement, options?: OptionsMemoryRouter) => ReactElement

export const withMemoryRouter: WithMemoryRouter = (
	component,
	{ routePath = "/", initialPath = "/" } = {}
) => {
	return (
		<MemoryRouter initialEntries={[initialPath]}>
			<Routes>
				<Route path={routePath} element={component} />
			</Routes>
		</MemoryRouter>
	)
}
