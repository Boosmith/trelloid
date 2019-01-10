import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
	<Router>
		<Route path="/" exact component={HomePage}/>
		<Route path="/about" component={AboutPage}/>
	</Router>
);

