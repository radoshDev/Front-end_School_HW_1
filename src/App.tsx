import { Route, Routes } from "react-router-dom"
import Nav from "components/Nav"
import User from "components/User"
import Trends from "components/Trends"
import { Container } from "styles/CommonStyles"

const App = () => {
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
