import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app")
);
