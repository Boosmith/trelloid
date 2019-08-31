import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import Button from "@material-ui/core/Button";

const UserForm = ({ user, onChange, onSave, saving = false, errors = {} }) => {
	return (
		<form onSubmit={onSave}>
			<h2>{user._id ? "Edit" : "Add"} User</h2>
			{errors.onSave && (
				<div className="alert alert-danger" role="alert">
					{errors.onSave}
				</div>
			)}
			<TextInput
				name="firstName"
				type="text"
				label="First name"
				value={user.firstName}
				onChange={onChange}
				error={errors.firstName}
			/>

			<TextInput
				name="lastName"
				type="text"
				label="Last name"
				value={user.lastName}
				onChange={onChange}
				error={errors.lastName}
			/>

			<TextInput
				name="address"
				type="text"
				label="Address"
				value={user.address}
				onChange={onChange}
				error={errors.address}
			/>

			<TextInput
				name="city"
				type="text"
				label="City"
				value={user.city}
				onChange={onChange}
				error={errors.city}
			/>

			<TextInput
				name="postcode"
				type="text"
				label="Postcode"
				value={user.postcode}
				onChange={onChange}
				error={errors.postcode}
			/>
			<Button type="submit" disabled={saving} variant="contained">
				{saving ? "Saving..." : "Save"}
			</Button>
		</form>
	);
};

UserForm.propTypes = {
	errors: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	saving: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired
};

export default UserForm;
