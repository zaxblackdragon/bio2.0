import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from './components/sidebar';
import Navbar from './components/Navbar/index';
import Home from './components/Home/index';
import Art from './components/Art/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Appinfo from './components/Appinfo/index';

import './App.css';

export default function App() {
  return (
    <div id="App">
            <Navbar />
            <SideBar />
            <div id="page-wrap">
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/art" component={Art} />
                  <Route exact path="/res" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/app_info" component={Appinfo} />
                </Switch>
              </Router>
            </div>
        </div>

  );
}
