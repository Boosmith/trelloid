import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserForm from "../users/UserForm";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import { newUser } from "../../../tools/mockData";

function ManageUserPage({ users, loadUsers, saveUser, ...props }) {
	// const [user, setUser] = useState({ ...props.user });
	// const [errors, setErrors] = useState({});
	useEffect(() => {
		if (users.length === 0) {
			loadUsers().catch(err => {
				alert("Loading users failed");
			});
		} else {
			// setUser({ ...props.user });
		}
	}, []);

	function handleChange(event) {
		const { name, value } = event.target;
		// setUser(prevUser => ({
		// 	...prevUser,
		// 	[name]: value
		// }));
	}

	function handleSave(event) {
		event.preventDefault();
		// saveUser(user).catch(err => {
		// 	alert("Failed to save user");
		// });
	}

	return (
		<UserForm
			user={{}}
			onChange={handleChange}
			onSave={handleSave}
			errors={{}}
		/>
	);
}

function mapStateToProps(state) {
	return {
		user: newUser,
		users: state.users
	};
}

const mapDispatchToProps = {
	loadUsers: userActions.loadUsers,
	saveUser: userActions.saveUser
};

ManageUserPage.propTypes = {
	loadUsers: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	saveUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	users: PropTypes.array.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ManageUserPage);
