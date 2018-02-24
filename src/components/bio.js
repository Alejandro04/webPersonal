import React, { Component } from 'react';
import Menu from './menu';
import '../index.css';

class Bio extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <section className="bio" id="bio">
                <h3 className="bio-title">Contacto</h3>
                <p className="bio-text">alejodev04@gmail.com</p>
                <p className="bio-text">
                  <a href="https://github.com/Alejandro04/" target="_blank">Github</a>| 
                  <a href="https://www.linkedin.com/in/alejandroroa/" target="_blank">Linkedin</a>
                </p>
                <img src="./me.jpg" className="img-bio"/>
        </section>
      </div>
    );
  }
}

export default Bio;
