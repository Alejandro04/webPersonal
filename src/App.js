import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Header from './components/header';
import Bio from './components/bio';
import Knowledge from './components/knowledge';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Header/>
        <Bio/>
        <Knowledge/>
      </div>
    );
  }
}

export default App;
