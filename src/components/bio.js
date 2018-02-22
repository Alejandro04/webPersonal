import React, { Component } from 'react';
import '../index.css';

class Bio extends Component {
  render() {
    return (
      <div>
        <section className="bio" id="bio">
                <h3 className="bio-title">Contacto</h3>
                <p className="bio-text">alejodev04@gmail.com, <a href="https://github.com/Alejandro04/" target="_blank">Github</a></p>
                <img src="./me.jpg" className="img-bio"/>
                <p className="bio-text">Trabajemos juntos.</p>
        </section>
      </div>
    );
  }
}

export default Bio;
