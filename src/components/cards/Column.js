import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cardActions from "../../redux/actions/cardActions";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

class Column extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			cards: this.props.cards
		};
	}
	render() {
		return <Grid></Grid>;
	}
}

function mapStateToProps(state) {
	return {};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators()
});

export default connect(mapStateToProps)(Column);
