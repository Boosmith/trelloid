import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<Link to="/" activeclassname="active">Home</Link>
			{" | "}
			<Link to="/users" activeclassname="active">Users</Link>
			{" | "}
			<Link to="/about" activeclassname="active">About</Link>
		</nav>
	);
};

export default Header;
