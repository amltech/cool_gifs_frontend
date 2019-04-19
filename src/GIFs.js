import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

class GIFs extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    gifs: []
	};
    }

    componentDidMount() {
	fetch('http://localhost:8000/api/images/')
	    .then(response => response.json())
	    .then(data => this.setState({ gifs: data }));
    }
    
    render() {
	const { gifs } = this.state;
	return (
		<div>
		<ul>
		{gifs.map(gif =>
			  <li key={gif.id}>
			  <Link to={`/gifs/${gif.id}`}>{gif.title}</Link>
			  </li>
			 )}
		</ul>
		</div>
	);
    }
}
export default GIFs
