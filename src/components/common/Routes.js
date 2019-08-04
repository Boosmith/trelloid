import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../about/AboutPage";
import HomePage from "../home/HomePage";
import UsersPage from "../users/UsersPage";
import ManageUserPage from "../users/ManageUserPage";

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/users" exact component={UsersPage} />
				<Route path="/user/:uid" exact component={ManageUserPage} />
				<Route path="/user" exact component={ManageUserPage} />
				<Route path="/about" exact component={AboutPage} />
			</Switch>
		);
	}
}

export default Routes;
