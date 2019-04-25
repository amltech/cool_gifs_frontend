import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './../Home';
import GifList from './../GifList';
import Detail from './../Detail';
import Upload from './../Upload';
import Edit from './../Edit';
import NotFound from './../NotFound';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/gifs" component={GifList} />
    <Route exact path="/gifs/:pk" component={Detail} />
    <Route exact path="/gifs/:pk/edit" component={Edit} />
    <Route path="/upload" component={Upload} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
