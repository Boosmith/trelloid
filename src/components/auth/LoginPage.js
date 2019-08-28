import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../redux/actions/authActions";

class LoginPage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			user: {},
			errors: {},
			saving: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	formIsValid() {
		const { firstName, lastName, userName, password } = this.state.user;
		const errors = {};

		if (!firstName) errors.firstName = "First name is required";
		if (!lastName) errors.lastName = "Last name is required";
		if (!userName) errors.userName = "User name is required";

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
		this.props.actions
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
		return (
			<div>
				<LoginForm></LoginForm>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(authActions, dispatch)
});

LoginPage.propTypes = {
	actions: PropTypes.object.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage);
