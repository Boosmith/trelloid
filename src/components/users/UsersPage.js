import React from "react";
import PropTypes from "prop-types";
import UserList from "./UserList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";

class UsersPage extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.actions.loadUsers().catch(err => {
			alert("Loading users failed.");
		});
	}
	render() {
		return (
			<div>
				<h1>Users</h1>
				<UserList users={this.props.users} />
			</div>
		);
	}
}

UsersPage.propTypes = {
	actions: PropTypes.object.isRequired,
	users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	};
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersPage);
