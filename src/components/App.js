import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header/>
				<Route path="/" exact component={HomePage}/>
				<Route path="/about" component={AboutPage}/>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
