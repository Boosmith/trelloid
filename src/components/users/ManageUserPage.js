import React from "react";
import PropTypes from 'prop-types';
import UserForm from './UserForm';

class ManageUserPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
					<UserForm/>
        );
    }
}

export default ManageUserPage;

