import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as cardActions from "../../redux/actions/cardActions";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

export class Column extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards: this.props.cards
		};
	}
	render() {
		return (
			<Grid spacing={2}>
				{this.props.cards.map(({ _id, title, description }) => (
					<Card id={_id} title={title} description={description} />
				))}
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return { cards: state.cards };
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(cardActions, dispatch)
});

Column.propTypes = {
	actions: PropTypes.object.isRequired,
	cards: PropTypes.array.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Column);
