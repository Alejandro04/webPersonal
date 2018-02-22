import React, { Component } from 'react';
import '../index.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="backgound-header">
            <div className="items-header">
                <h1 className="title-header">Alejandro Roa</h1>
                <p className="text-header">Ingeniero de Sistemas - Full-Stack Developer - CTO en Karbook</p>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
