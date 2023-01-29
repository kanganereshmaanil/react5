import React from 'react'

const EnhancedComponent = (OriginalComponent) => {
	class NewComponent extends React.Component {
		render() {
			return <OriginalComponent name="This is Higher Order Component" />
		}
	}
	return NewComponent
}

export default EnhancedComponent;