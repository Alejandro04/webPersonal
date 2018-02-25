import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Bio from './components/bio';
import Knowledge from './components/knowledge';
import Goals from './components/goals';

/*
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
*/

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

const App = () =>
<HashRouter>
  <div>
    <Route exact path="/" component={Header}/>
    <Route exact path="/bio" component={Bio}/>
    <Route path="/knowledge" component={Knowledge}/>
    <Route path="/goals" component={Goals}/>
  </div>
</HashRouter>

export default App