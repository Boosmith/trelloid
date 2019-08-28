import React from "react";
import { Card } from "@material-ui/core";
import TextInput from "../common/TextInput";

const RegistrationForm = ({ onChange, onSave, errors, user }) => (
	<Card className="container">
		<form action="/" onSubmit={onSave}>
			<h2 className="card-heading">Registration</h2>
			{errors.summary && <p className="error-message">{errors.summary}</p>}

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
		</form>
	</Card>
);

export default RegistrationForm;
