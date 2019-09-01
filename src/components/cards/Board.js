import React, { Component } from "react";
import PropTypes from "prop-types";
import { Column } from "./Column";

class Board extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards: this.props.cards
		};
	}
	render() {
		return <Column cards={this.state.cards}></Column>;
	}
}

Board.propTypes = {};

export default Board;
