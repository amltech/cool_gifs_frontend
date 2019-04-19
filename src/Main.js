import React, { Component } from 'react';

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
	      <Route path="/" component={Home} />
	      <Route path="/gifs" component={GIFs}/>
	    </div>
	  </div>
	</HashRouter>
    );
  }
}

export default Main;
