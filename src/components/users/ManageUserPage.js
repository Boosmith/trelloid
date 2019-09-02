import React from "react";
import PropTypes from "prop-types";
import UserForm from "../users/UserForm";
import { connect } from "react-redux";
import { saveUser } from "../../redux/actions/userActions";

import Loader from "../common/Loader";
import { toast } from "react-toastify";
import { newUser } from "../../tools/mockData";

export class ManageUserPage extends React.Component {
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
		if (prevProps.user._id !== this.props.user._id) {
			this.setState({ user: Object.assign({}, this.props.user) });
		}
	}

	formIsValid() {
		const { firstName, lastName, address, city, postcode } = this.state.user;
		const errors = {};

		if (!firstName) errors.firstName = "First name is required";
		if (!lastName) errors.lastName = "Last name is required";
		if (!address) errors.address = "Address is required";
		if (!city) errors.city = "City is required";
		if (!postcode) errors.postcode = "Postcode is required";

		this.setState({ errors: errors });
		return Object.keys(errors).length === 0;
	}

	handleChange(event) {
		const { name, value } = event.target;
		let user = Object.assign({}, this.state.user);
		user[name] = value;
		this.setState({ user: user });
	}

	handleSave(event) {
		event.preventDefault();
		if (!this.formIsValid()) return;
		this.setState({ saving: true });
		this.props
			.saveUser(this.state.user)
			.then(() => {
				toast.success("User saved");
				this.props.history.push("/users");
			})
			.catch(error => {
				this.setState({
					errors: {
						onSave: error.message
					},
					saving: false
				});
			});
	}
	render() {
		return this.props.users.length === 0 ? (
			<Loader />
		) : (
			<UserForm
				user={this.state.user}
				onChange={this.handleChange}
				onSave={this.handleSave}
				saving={this.state.saving}
				errors={this.state.errors}
			/>
		);
	}
}

function getUserById(users, id) {
	return users.find(user => user._id === id) || null;
}

function mapStateToProps(state, ownProps) {
	const userId = ownProps.match.params.uid;

	const user =
		userId && state.users.length > 0
			? getUserById(state.users, userId)
			: newUser;

	return {
		user: user,
		users: state.users
	};
}

const actionCreators = {
	saveUser
};

ManageUserPage.propTypes = {
	saveUser: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	users: PropTypes.array.isRequired
};

export default connect(
	mapStateToProps,
	actionCreators
)(ManageUserPage);
