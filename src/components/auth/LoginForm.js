import React from "react";
import { Card } from "@material-ui/core";
import TextInput from "../common/TextInput";

const LoginForm = ({ onChange, onSave, errors, user }) => (
	<Card className="container">
		<form action="/" onSubmit={onSave}>
			<h2 className="card-heading">Registration</h2>
			{errors.summary && <p className="error-message">{errors.summary}</p>}

			<TextInput
				name="userName"
				type="text"
				label="User name"
				value={user.userName}
				onChange={onChange}
				error={errors.userName}
			/>

			<TextInput
				name="password"
				type="password"
				label="Password"
				value={user.password}
				onChange={onChange}
				error={errors.password}
			/>
		</form>
	</Card>
);

export default LoginForm;
