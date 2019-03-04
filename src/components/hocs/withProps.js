import React from "react";

function withProps(WrappedComponent, data) {
	class WithProps extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {
			return <WrappedComponent {...data} {...this.props}/>;
		}

	}

	WithProps.displayName = `WithProps(${getDisplayName(WrappedComponent)}`;
	return WithProps;
}

function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withProps;
