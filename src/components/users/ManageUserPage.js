import React from 'react';
import PropTypes from 'prop-types';
import UserForm from '../users/UserForm';


class ManageUserPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				id: '',
				firstName: '',
				lastName: ''
			}
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		const uid = this.props.match.params.uid;
		const user = getUserById(this.props.data.users, uid);
		this.setState({user: Object.assign({}, user)});
	}

	handleChange(event) {
		const field = event.target.name;
		let user = Object.assign({}, this.state.user);
		user[field] = event.target.value;
		this.setState({user: user});
	}

	saveUserState(event) {
		return this.state;
	}


	render() {
		return (
			<UserForm
				user={this.state.user}
				onSave={this.saveUserState}
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

ManageUserPage.propTypes = {
	match: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired
};

export default ManageUserPage;

