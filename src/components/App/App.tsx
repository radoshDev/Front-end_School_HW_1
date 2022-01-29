import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import NotFound from "../../pages/NotFound"
import Trends from "../../pages/Trends"
import User from "../../pages/User"
import { Container } from "../../styles/CommonStyles"
import Navigation from "../Navigation"

const App: FC = () => {
	return (
		<div className="App">
			<Navigation />
			<Container id="main">
				<Routes>
					<Route path="/" element={<Trends />} />
					<Route path="/account/:id" element={<User />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
