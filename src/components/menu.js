import React, { Component } from 'react';
import {SideNav, SideNavItem, Button} from 'react-materialize'
import '../index.css';

class Header extends Component {
  render() {
    return (
        <div class="navbar-fixed">
            <nav>
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo"></a>
                <ul class="right hide-on-med-and-down">
                  <li><a href="#/" class="ancla">Home</a></li>
                  <li><a href="#/bio" class="ancla">Bio</a></li>
                  <li><a href="#/knowledge" class="ancla">Conocimientos</a></li>
                  <li><a href="https://medium.com/@alejandroroa" class="ancla" target="_blank">Medium</a></li>
                </ul>
                <SideNav
                trigger={<Button className="btn-header-responsive">MENU</Button>}
                options={{ closeOnClick: true }}
                >
                <SideNavItem userView
                  user={{
                    background: 'wallpaper.jpg',
                    image: 'me.jpg',
                    name: 'Alejandro Roa',
                    email: 'alejodev04@gmail.com',
                  }}
                />
                <SideNavItem href='#/'>Home</SideNavItem>
                <SideNavItem href='#/bio'>Bio</SideNavItem>
                <SideNavItem href='#/knowledge'>Conocimientos</SideNavItem>
                <SideNavItem href='https://medium.com/@alejandroroa'>Medium</SideNavItem>
              </SideNav>
              </div>
            </nav>
        </div>
    );
  }
}

export default Header;
