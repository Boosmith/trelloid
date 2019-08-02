import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserListRow = ({ user }) => {
	return (
		<tr>
			<td>
				<Link to={"/users/" + user._id}>
					{user.firstName + " " + user.lastName}
				</Link>
			</td>
		</tr>
	);
};

UserListRow.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserListRow;
