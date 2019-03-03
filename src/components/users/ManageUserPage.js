import React from 'react';
import PropTypes from 'prop-types';
import UserForm from '../users/UserForm';


class ManageUserPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: Object.assign({}, this.props.user),
			errors: {},
			saving: false
		};
		this.updateUserState = this.updateUserState.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.user.id !== nextProps.user.id) {
			this.setState({user: Object.assign({}, nextProps.user)});
		}
	}

	updateUserState(event) {
		const field = event.target.name;
		let user = Object.assign({}, this.state.user);
		user[field] = event.target.value;
		return this.setState({user: user});
	}


	render() {
		return (
			<UserForm
				onChange={this.updateUserState}
				user={this.state.user}
				errors={this.state.errors}
				saving={this.state.saving}
			/>
		);
	}
}

ManageUserPage.propTypes = {
	user: PropTypes.object.isRequired
};

export default ManageUserPage;

