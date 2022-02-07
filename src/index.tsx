import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import { store } from "./store/store"
import ThemeWrapper from "./styles/ThemeWrapper"

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeWrapper>
				<App />
			</ThemeWrapper>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
)
