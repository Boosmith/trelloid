import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={HomePage}/>
			<Route path="/about" exact component={AboutPage}/>
		</Switch>
	);
}

export default Routes;

