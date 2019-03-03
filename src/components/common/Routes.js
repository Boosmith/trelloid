import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import AboutPage from '../about/AboutPage';
import HomePage from '../home/HomePage';
import UsersPage from '../users/UsersPage';
import ManageUserPage from "../users/ManageUserPage";
import withProps from '../hocs/withProps';

class Routes extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		const UsersPageWithProps = withProps(UsersPage, this.props);
		return (
			<Switch>
				<Route path="/" exact component={HomePage}/>
				<Route path="/users" exact component={UsersPageWithProps}/>
				{/*<Route path="/users/:uid" exact render={this.ComponentWithProps(ManageUserPage)}/>*/}
				<Route path="/about" exact component={AboutPage}/>
			</Switch>
		);
	}
}


Routes.propTypes = {
	users: PropTypes.array.isRequired
};

export default Routes;

