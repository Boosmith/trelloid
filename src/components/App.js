import React from "react";
import Header from "./common/Header";
import Routes from "./common/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@material-ui/core/Container";

const App = () => (
	<Container maxWidth="lg">
		<Header />
		<Routes />
		<ToastContainer autoClose={3000} hideProgressBar />
	</Container>
);

export default App;
