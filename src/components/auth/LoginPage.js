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
			auth: {},
			user: {},
			errors: {},
			saving: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	formIsValid() {
		const { userName, password } = this.state.user;
		const errors = {};

		if (!userName) errors.userName = "User name is required";
		if (!password) errors.password = "Password is required";

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
			.login(this.state.user)
			.then(auth => {
				this.setState({ auth: auth });
				localStorage.setItem("trelloid_token", JSON.stringify(auth));
				this.props.history.push("/");
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
				<LoginForm
					user={this.state.user}
					onChange={this.handleChange}
					onSave={this.handleSave}
					saving={this.state.saving}
					errors={this.state.errors}
				></LoginForm>
			</div>
		);
	}
}
function mapStateToProps(state) {
	const { loggingIn } = state.authentication;

	return { loggingIn };
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
