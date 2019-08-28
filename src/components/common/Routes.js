import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../about/AboutPage";
import HomePage from "../home/HomePage";
import UsersPage from "../users/UsersPage";
import { default as ManageUserPage } from "../users/ManageUserPage";
import RegistrationForm from "../auth/RegistrationForm";

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/register" exact component={RegistrationForm} />
				<Route path="/users" exact component={UsersPage} />
				<Route path="/user/:uid" exact component={ManageUserPage} />
				<Route path="/user" exact component={ManageUserPage} />
				<Route path="/about" exact component={AboutPage} />
			</Switch>
		);
	}
}

export default Routes;
