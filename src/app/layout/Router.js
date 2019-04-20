import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './../Home';
import GifList from './../GifList';
import GifDetail from './../GifDetail';
import Upload from './../Upload';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/gifs" component={GifList} />
    <Route path="/gifs/:pk" component={GifDetail} />
    <Route path="/upload" component={Upload} />
  </Switch>
);

export default Router;
