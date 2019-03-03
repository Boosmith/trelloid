import React from 'react';
import Header from './common/Header';
import Routes from './common/Routes';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					id: '1',
					firstName: 'Andrew',
					lastName: 'Smith'
				},
				{
					id: '2',
					firstName: 'Joe',
					lastName: 'Bloggs'
				},
				{
					id: '3',
					firstName: 'Jane',
					lastName: 'Doe'
				}
			]
		};

		this.saveUserState = this.saveUserState.bind(this);
	}

	saveUserState(user) {
		if (user.id) {
			const users = Object.assign({}.this.state.users);
			const existingUserIndex = users.findIndex(a => a.id == user.id);
			users.splice(existingUserIndex, 1, user);
			this.setState({users: users});
		}
	}

	render() {
		const users = this.state.users;
		return (
			<div className="container-fluid">
				<Header/>
				<Routes users={users} saveUserState={this.saveUserState}/>
			</div>
		);
	}
}

export default App;
