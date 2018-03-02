import React, { Component } from 'react';
import Menu from './menu';
import data from '../request/achievements';
import datap from '../request/achievements_personal';
import '../index.css';


export default class Achievements extends React.Component{
    

    ac_professional(){
        return data.ac.map(a=>{
            return (
                <div class="col s12 m4 l4">
                    <div class="card-panel purple lighten-2">
                        <span class="white-text">
                            {a.ac}
                        </span>
                    </div>
                </div>
            );
        })
    }

    ac_personal(){
        return datap.acp.map(ac=>{
            return (
                <div class="col s12 m4 l4">
                    <div class="card-panel purple lighten-2">
                        <span class="white-text">
                            {ac.acp}
                        </span>
                    </div>
                </div>
            );
        })
    }


  render() {
    return (
      <div>
       <Menu/>
          <header className="backgound-ac">
              <div className="items-header">
                <h1 className="title-header">Logros Profesionales</h1>
                <p className="text-header_p">La perseverancia por encima de las dificultades.</p>              
              </div>
          </header>
          <section className="ac">
            <div class="row">
                <div class="col s12 m12 l12 center-align">
                    <div class="row">
                         {this.ac_professional()}
                    </div>
                </div>
            </div>
        </section>
        <header className="backgound-acp">
              <div className="items-header">
                <h1 className="title-header text_per">Logros Personales</h1>
                <p className="text-header_p text_per">Para mi, la familia es el motor mas grande que puedes tener como ser humano.</p>              
              </div>
          </header>
          <section className="ac">
            <div class="row">
                <div class="col s12 m12 l12 center-align">
                    <div class="row">
                         {this.ac_personal()}
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
