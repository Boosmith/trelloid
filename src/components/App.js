import React from "react";
import Header from "./common/Header";
import Routes from "./common/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
	<div className="container-fluid">
		<Header />
		<Routes />
		<ToastContainer autoClose={3000} hideProgressBar />
	</div>
);

export default App;
