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
import Header from "./header";

function Main() {
    return (

	    <HashRouter>
	    <Header />
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/gifs" component={GifList} />
              <Route path="/gifs/:pk" component={GIFDetail} />
	      <Route path="/upload" component={Upload} />
            </div>
	    </HashRouter>
	    
    );
}
export default Main;
