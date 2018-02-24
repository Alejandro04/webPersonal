import React, { Component } from 'react';
import '../index.css';

class Header extends Component {
  render() {
    return (
        <div class="navbar-fixed">
            <nav>
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo"></a>
                <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="large material-icons">toc</i></a>
                <ul class="right hide-on-med-and-down">
                  <li><a href="/" class="ancla">Home</a></li>
                  <li><a href="/bio" class="ancla">Bio</a></li>
                  <li><a href="/knowledge" class="ancla">Conocimientos</a></li>
                  <li><a href="#" class="ancla">Proyectos</a></li>
                  <li><a href="/goals" class="ancla">Metas</a></li>
                  <li><a href="https://medium.com/@alejandroroa" class="ancla" target="_blank">Medium</a></li>
                </ul>
                <ul class="side-nav" id="mobile-demo">
                              <li><a href="#bio" class="ancla">Bio</a></li>
                              <li><a href="#conocimientos" class="ancla">Conocimientos</a></li>
                              <li><a href="#proyectos" class="ancla">Proyectos</a></li>
                              <li><a href="#cosas" class="ancla">Metas</a></li>
                  <li><a href="https://medium.com/@alejandroroa" class="ancla" target="_blank">Medium</a></li>
                </ul>
              </div>
            </nav>
        </div>
    );
  }
}

export default Header;
