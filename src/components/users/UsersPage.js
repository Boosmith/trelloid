import React from "react";
import PropTypes from "prop-types";
import UserList from "./UserList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import { Redirect } from "react-router-dom";
import Loader from "../common/Loader";

class UsersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectToAddUserPage: false
		};

		this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
	}
	componentDidMount() {
		if (this.props.users.length === 0) {
			this.props.actions.loadUsers().catch(err => {
				alert("Loading users failed.");
			});
		}
	}

	redirectToAddUserPage() {
		this.setState({ redirectToAddUserPage: true });
	}
	render() {
		return (
			<div>
				{this.state.redirectToAddUserPage && <Redirect push to="/user" />}
				<h2>Users</h2>
				{this.props.loading ? (
					<Loader />
				) : (
					<>
						<button
							className="btn btn-primary"
							onClick={this.redirectToAddUserPage}
						>
							Add User
						</button>
						<UserList users={this.props.users} />
					</>
				)}
			</div>
		);
	}
}

UsersPage.propTypes = {
	actions: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
	return {
		users: state.users,
		loading: state.apiCallsInProgress > 0
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
