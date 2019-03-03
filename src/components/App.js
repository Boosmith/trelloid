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
	}

	render() {
		const users = this.state.users;
		return (
			<div className="container-fluid">
				<Header/>
				<Routes users={users}/>
			</div>
		);
	}
}

export default App;
