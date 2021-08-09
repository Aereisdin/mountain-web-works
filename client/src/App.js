import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './Components/Nav';
import Landing from './Pages/Landing';
import Wifi from './Pages/Wifi'
import './App.scss';
import Equipment from "./Pages/Equipment";
import Development from "./Pages/Development";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/wifi' component={Wifi} /> 
            <Route exact path='/equip' component={Equipment} /> 
            <Route exact path='/dev' component={Development} /> 
            {/* <Private exact path='/gardeners' component={Gardeners} />
            <Private exact path='/profile' component={Profile} />
            <Private exact path='/trellis' component={Trellis} /> */}
          </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;
