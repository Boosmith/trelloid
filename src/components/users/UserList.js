import React from 'react';
import PropTypes from 'prop-types';
import UserListRow from './UserListRow';

const UserList = ({users}) => {
	return (
		<table className="table">
			<thead>
			<tr>
				<th>&nbsp;</th>
				<th>First name</th>
				<th>Last name</th>
			</tr>
			</thead>
			<tbody>
			{users.map(user =>
				<UserListRow key={user.id} user={user}/>
			)}
			</tbody>
		</table>
	);
};

UserList.propTypes = {
	users: PropTypes.array.isRequired
};

export default UserList;
