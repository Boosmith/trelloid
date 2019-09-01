import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Column } from "./Column";

export const Board = ({ cards }) => {
	return <Column cards={cards}></Column>;
};

Board.propTypes = {
	cards: PropTypes.array.isRequired
};

const MapStateToProps = state => ({ cards: state.cards });

export default connect(MapStateToProps)(Board);
