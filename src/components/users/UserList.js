import React from "react";
import PropTypes from "prop-types";
import UserListRow from "./UserListRow";

const UserList = ({ onDeleteClick, users }) => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => (
					<UserListRow
						key={user._id}
						onDeleteClick={onDeleteClick}
						user={user}
					/>
				))}
			</tbody>
		</table>
	);
};

UserList.propTypes = {
	onDeleteClick: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired
};

export default UserList;
