import React from "react";

function withProps(WrappedComponent, data) {
	class WithProps extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {
			const {...passThroughProps} = this.props;
			return <WrappedComponent data={data} {...passThroughProps}/>;
		}

	}

	WithProps.displayName = `WithProps(${getDisplayName(WrappedComponent)}`;
	return WithProps;
}

function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withProps;
