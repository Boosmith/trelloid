import React from "react";
import PropTypes from "prop-types";
import UserForm from "../users/UserForm";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";

class ManageUserPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				id: "",
				firstName: "",
				lastName: ""
			}
		};
		this.saveUser = this.saveUser.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		const uid = this.props.match.params.uid;
		const user = getUserById(this.props.users, uid);
		this.setState({ user: Object.assign({}, user) });
	}

	handleChange(event) {
		const user = { ...this.state.user, title: event.target.value };
		this.setState({ user: user });
	}

	saveUser(event) {
		event.preventDefault();
		this.props.createUser(this.state.user);
	}

	render() {
		return (
			<UserForm
				user={this.state.user}
				onSave={this.saveUser}
				onChange={this.handleChange}
				errors={{}}
				saving={false}
			/>
		);
	}
}

function getUserById(users, id) {
	const user = users.filter(user => user.id === id);
	if (user.length) return user[0];
	return null;
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

function mapDispatchToProps(dispatch) {
	return {
		createUser: user => dispatch(userActions.createUser(user))
	};
}

ManageUserPage.propTypes = {
	createUser: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	users: PropTypes.array.isRequired,
	saveUserState: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
