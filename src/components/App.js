import React from 'react';
import Header from './common/Header';
import Routes from './common/Routes';


class App extends React.Component {
	constructor(props, context) {
		super(props);
		this.state = {
			user: {
				id: 1,
				firstName: 'Andrew',
				lastName: 'Smith'
			}
		};
	}


	render() {
		return (
			<div className="container-fluid">
				<Header/>
				<Routes/>
			</div>
		);
	}
}

export default App;
