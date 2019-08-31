import React from "react";
import UiCard from "@material-ui/core/Card";
import { CardContent, CardHeader, Typography } from "@material-ui/core";

const Card = ({
	_id,
	number,
	title,
	description,
	status,
	board,
	comments,
	activity,
	attachments,
	owner,
	members,
	createdDate,
	modifiedDate
}) => (
	<UiCard>
		<CardHeader title={title} />>
		<CardContent>
			<Typography variant="body1" gutterBottom>
				{description}
			</Typography>
		</CardContent>
	</UiCard>
);

export default Card;
