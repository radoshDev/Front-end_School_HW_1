import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import App from "App"
import { store } from "app/store"
import { GlobalStyles } from "styles/GlobalStyles"

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyles />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
)
