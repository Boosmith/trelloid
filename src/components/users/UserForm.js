import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const UserForm = ({ user, onChange, onSave, errors }) => {
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

			<TextInput
				name="address"
				label="Address"
				value={user.address}
				onChange={onChange}
				error={errors.address}
			/>

			<TextInput
				name="city"
				label="City"
				value={user.city}
				onChange={onChange}
				error={errors.city}
			/>

			<TextInput
				name="postcode"
				label="Postcode"
				value={user.postcode}
				onChange={onChange}
				error={errors.postcode}
			/>
			<input type="submit" value="Save" className="btn btn-primary" />
		</form>
	);
};

UserForm.propTypes = {
	user: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	errors: PropTypes.object
};

export default UserForm;
