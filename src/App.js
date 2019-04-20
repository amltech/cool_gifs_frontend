import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Home";
import GifList from "./Gifs";
import GIFDetail from "./gif-detail";
import Upload from "./Upload";

function Main() {
    return (

      <HashRouter>
        <div>
          <h1>Cool GIFs</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/gifs">GIFs</NavLink></li>
	    <li><NavLink to="/upload">Upload</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/gifs" component={GifList} />
            <Route path="/gifs/:pk" component={GIFDetail} />
	    <Route path="/upload" component={Upload} />
          </div>
        </div>
      </HashRouter>
    );
}
export default Main;
