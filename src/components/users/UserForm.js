import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const UserForm = ({ user, errors, onSave, saving, onChange }) => {
	return (
		<form onSubmit={onSave}>
			<h1>Manage User</h1>
			<TextInput
				name="firstName"
				label="First name"
				value={user.firstName}
				onChange={onChange}
				error={errors.firstName}
			/>

			<TextInput
				name="lastName"
				label="Last name"
				value={user.lastName}
				onChange={onChange}
				error={errors.lastName}
			/>

			<input
				type="submit"
				disabled={saving}
				value={saving ? "Saving..." : "Save"}
				className="btn btn-primary"
			/>
		</form>
	);
};

UserForm.propTypes = {
	user: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	saving: PropTypes.func.isRequired,
	errors: PropTypes.object
};

export default UserForm;
