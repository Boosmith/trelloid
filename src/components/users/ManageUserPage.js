import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserForm from "../users/UserForm";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import { newUser } from "../../../tools/mockData";
import { bindActionCreators } from "redux";

class ManageUserPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			user: Object.assign({}, this.props.user),
			errors: {},
			saving: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		let user = Object.assign({}, this.state.user);
		user[name] = value;
		return this.setState({ user: user });
	}

	handleSave(event) {
		event.preventDefault();
		this.props.actions
			.saveUser(this.state.user)
			.then(() => {
				this.props.history.push("/users");
			})
			.catch(err => {
				alert("Failed to save user");
			});
	}
	render() {
		return (
			<UserForm
				user={this.state.user}
				onChange={this.handleChange}
				onSave={this.handleSave}
				errors={this.state.errors}
			/>
		);
	}
}

function getUserById(users, id) {
	const filteredUsers = users.filter(user => user._id === id) || null;
	return filteredUsers;
}

function mapStateToProps(state, ownProps) {
	const userId = ownProps.match.params.uid;

	const user = userId ? getUserById(state.users, userId) : newUser;

	return {
		user: user[0]
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(userActions, dispatch)
});

ManageUserPage.propTypes = {
	actions: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ManageUserPage);
