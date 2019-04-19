import React, { Component } from "react";

class GIFDetail extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    gif: {}
	};
    }

    componentDidMount() {
	const { pk } = this.props.match.params;
	fetch(`http://localhost:8000/api/images/${pk}/`)
	    .then(response => response.json())
	    .then(data => this.setState({ gif: data }));
    }
    
    render() {
	const { gif } = this.state;
	return (
		<div>
		<h2>{gif.title}</h2>
		<img src={gif.src} />
		<p>{gif.description}</p>
		
		</div>
	);
    }
}
export default GIFDetail
