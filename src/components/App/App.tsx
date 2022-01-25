import { Route, Routes } from "react-router-dom"
import Nav from "components/Navigation/Navigation"
import User from "pages/User"
import Trends from "pages/Trends"
import { Container } from "styles/CommonStyles"
import { FC } from "react"

const App: FC = () => {
	return (
		<div className="App">
			<Nav />
			<Container id="main">
				<Routes>
					<Route path="/" element={<Trends />} />
					<Route path="/account/:id" element={<User />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
