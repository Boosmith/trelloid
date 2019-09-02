import React from "react";
import UiCard from "@material-ui/core/Card";
import { CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	card: {
		maxWidth: "300px"
	}
});

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
}) => {
	const classes = useStyles();
	return (
		<UiCard className={classes.card}>
			<CardHeader title={title} />
			<CardContent>
				<Typography variant="body1" gutterBottom>
					{description}
				</Typography>
			</CardContent>
		</UiCard>
	);
};

export default Card;
