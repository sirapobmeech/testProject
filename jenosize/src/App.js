import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './Container/Home'
import Jenosize from './Container/SearchRestaurants'
import MapComponent from './Presentation/Map'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Jenosize" component={Jenosize} />
        <Route path="/map" component={MapComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
