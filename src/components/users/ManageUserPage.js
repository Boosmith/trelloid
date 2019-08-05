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

	componentDidUpdate(prevProps) {
		if (this.props.user._id !== prevProps.user._id) {
			this.setState({ user: Object.assign({}, this.props.user) });
		}
	}

	handleChange(event) {
		const { name, value } = event.target;
		let user = Object.assign({}, this.state.user);
		user[name] = value;
		return this.setState({ user: user });
	}

	handleSave(event) {
		event.preventDefault();
		this.props.actions.saveUser(this.state.user).catch(err => {
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
	return users.filter(user => (user._id = id)) || null;
}

function mapStateToProps(state, ownProps) {
	const userId = ownProps.match.params.uid;

	const user = userId ? getUserById(state.users, userId) : newUser;

	return {
		user: user,
		users: state.users
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(userActions, dispatch)
});

ManageUserPage.propTypes = {
	user: PropTypes.object.isRequired,
	users: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ManageUserPage);
