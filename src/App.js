import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import GIFs from "./GIFs";
import GIFDetail from "./gif-detail";

class Main extends Component {
  render() {
      return (
	<HashRouter>
	  <div>
	    <h1>Cool GIFs</h1>
	    <ul className="header">
	      <li><NavLink to="/">Home</NavLink></li>
	      <li><NavLink to="/gifs">GIFs</NavLink></li>
	    </ul>
	      <div className="content">
	      <Route exact path="/" component={Home} />
	      <Route exact path="/gifs" component={GIFs} />
	      <Route path="/gifs/:pk" component={GIFDetail} />
	    </div>
	  </div>
	</HashRouter>
    );
  }
}

export default Main;
