import React from "react";
import { Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextInput from "../common/TextInput";

const LoginForm = ({ onChange, onSave, saving, errors, user }) => (
	<Card className="container">
		<form action="/" onSubmit={onSave}>
			<h2 className="card-heading">Log in</h2>
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
			<Button type="submit" disabled={saving} variant="contained">
				{saving ? "Logging in..." : "Login"}
			</Button>
		</form>
	</Card>
);

export default LoginForm;
