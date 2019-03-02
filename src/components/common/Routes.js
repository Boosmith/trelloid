import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import AboutPage from '../about/AboutPage';
import HomePage from '../home/HomePage';
import UsersPage from '../users/UsersPage';

class Routes extends React.Component {
	constructor(props) {
		super(props);
		this.UsersPageWithProps = this.UsersPageWithProps.bind(this);
	}

	UsersPageWithProps() {
		return (
			<UsersPage users={this.props.users}/>
		);
	}

	render() {
		return (
			<Switch>
				<Route path="/" exact component={HomePage}/>
				<Route path="/users" exact render={this.UsersPageWithProps}/>
				<Route path="/about" exact component={AboutPage}/>

			</Switch>
		);
	}
}


Routes.propTypes = {
	users: PropTypes.array.isRequired
};

export default Routes;

