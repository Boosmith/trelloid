import React from "react";
import PropTypes from "prop-types";
import UserList from "./UserList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import { Redirect } from "react-router-dom";
import Loader from "../common/Loader";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";

class UsersPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectToAddUserPage: false,
			users: {}
		};
		this.handleDeleteUser = this.handleDeleteUser.bind(this);
		this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
	}

	componentDidMount() {
		if (!!localStorage.getItem("jwt_item")) {
			const auth = localStorage.getItem("jwt_auth");
			this.props.actions.loadUsers(auth.token);
		}
	}

	handleDeleteUser(user) {
		toast.success("Course deleted");
		this.props.actions.deleteUser(user).catch(error => {
			toast.error("Delete failed. " + error.message, { autoClose: false });
		});
	}
	redirectToAddUserPage() {
		this.setState({ redirectToAddUserPage: true });
	}
	render() {
		return (
			<div className="jumbotron">
				{this.state.redirectToAddUserPage && <Redirect push to="/user" />}
				<h2>Users</h2>
				{this.props.loading ? (
					<Loader />
				) : (
					<>
						<Button
							variant="contained"
							className="btn btn-primary"
							onClick={this.redirectToAddUserPage}
						>
							Add User
						</Button>
						<UserList
							onDeleteClick={this.handleDeleteUser}
							users={this.props.users}
						/>
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
