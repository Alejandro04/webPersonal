import React, { Component } from 'react';
import Menu from './menu';
import '../index.css';

class Header extends Component {
  render() {
    return (
      <div>
          <Menu/>
          <header className="backgound-header">
              <div className="items-header">
                  <h1 className="title-header">Alejandro Roa</h1>
                  <p className="text-header">Software Engineer</p>
                  
              </div>
          </header>
        </div>
    );
  }
}

export default Header;
