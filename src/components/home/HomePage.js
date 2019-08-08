import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Trelloid</h1>
				<p>An example Kanban board application</p>
				<Link to="about" className="btn btn-primary btn-lg">
					Learn more
				</Link>
			</div>
		);
	}
}

export default HomePage;
