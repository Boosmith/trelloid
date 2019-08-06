import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class UserListRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	handleDeleteClick() {
		this.props.onDeleteClick(this.props.user);
	}

	render() {
		const { user } = this.props;
		return (
			<tr key={user._id}>
				<td>
					<Link to={"/user/" + user._id}>
						{user.firstName + " " + user.lastName}
					</Link>
				</td>
				<td>
					<button onClick={this.handleDeleteClick}>Delete</button>
				</td>
			</tr>
		);
	}
}

UserListRow.propTypes = {
	onDeleteClick: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

export default UserListRow;
