import React from "react";
import { renderToString } from "react-dom/server";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { loadUsers } from "./redux/actions/userActions";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();
store.dispatch(loadUsers());

renderToString(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
