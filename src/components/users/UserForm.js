import React from "react";
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

function UserForm({user, onSave, onChange, saving, errors}) {
	return (
		<form>
			<h1>Manage User</h1>
			<TextInput
				name="firstName"
				label="First name"
				value={user.firstName}
				onChange={onChange}
				error={errors.firstName}/>


			<TextInput
				name="lastName"
				label="Last name"
				value={user.lastName}
				onChange={onChange}
				error={errors.lastName}/>


			<input
				type="submit"
				disabled={saving}
				value={saving ? 'Saving...' : 'Save'}
				className="btn btn-primary"
				onClick={onSave}/>
		</form>
	);
}


UserForm.propTypes = {
	user: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	saving: PropTypes.bool,
	errors: PropTypes.object
};

export default UserForm;
