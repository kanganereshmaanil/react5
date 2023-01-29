import React from "react";
import EnhancedComponent from './Hoc'

class HocMain extends React.Component {
render() {
	
	return <h1>{this.props.name}</h1>
}
}

export default EnhancedComponent(HocMain);