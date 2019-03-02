import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserListRow = ({user}) => {
	return (
		<tr>
			<td><Link to={'/users/' + user.id}>{user.title}</Link></td>
			<td>{user.id}</td>
			<td>{user.firstName}</td>
			<td>{user.lastName}</td>
		</tr>
	);
};

UserListRow.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserListRow;
