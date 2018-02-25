import React, { Component } from 'react';
import Menu from './menu';
import data from '../request/goals';
import '../index.css';


export default class Goals extends React.Component{
    
    goals(){
        return data.goals.map(go=>{
            return (
                <div class="col s12 m4 l4">
                    <div class="card-panel teal">
                        <span class="white-text">
                            {go.goals}
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
                    <h3>Quiero aprender</h3>
                    <div class="row">
                         {this.goals()}
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
