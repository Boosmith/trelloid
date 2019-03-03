import React from "react";

function withProps(WrappedComponent) {
	class WithProps extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {
			debugger;
			// const {...passThroughProps} = this.props;
			return <WrappedComponent {...this.props}/>;
		}

	}

	WithProps.displayName = `WithProps(${getDisplayName(WrappedComponent)}`;
	return WithProps;
}

function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withProps;
