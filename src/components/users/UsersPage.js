import React from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList';

class UsersPage extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const {users} = this.props;
		return (
			<div>
				<h1>Users</h1>
				<UserList users={users}/>
			</div>
		);
	}
}

UsersPage.propTypes = {
	users: PropTypes.array.isRequired
};


export default UsersPage;
