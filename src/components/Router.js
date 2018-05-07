import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Startup from './Startup';
import Another from './Another'

const Router = () => (
    <BrowserRouter>
      <Switch>
       <Route exact path='/' component={Startup} />
       <Route exact path='/another' component={Another} />
      </Switch>
    </BrowserRouter>
   
    );
   
export default Router;