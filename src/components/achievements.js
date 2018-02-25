import React, { Component } from 'react';
import Menu from './menu';
import data from '../request/achievements';
import '../index.css';


export default class Achievements extends React.Component{
    
    ac(){
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

  render() {
    return (
      <div>
        <Menu/>
        <section className="goals" id="goals">
            <div class="row">
                <div class="col s12 m12 l12 center-align">
                    <h3>Cosas importantes que he completado</h3>
                    <div class="row">
                         {this.ac()}
                    </div>
                    <div class="row">
                         <p className="text-ac">Cabe destacar que estos logros tambien fueron posibles gracias al equipo extraordinario de trabajo que tengo y a mi familia que me acompaña.</p>
                         <p>Rodearte de buenas personas te va ayudar a llegar muy lejos.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
