import React, { Component } from 'react';
import Menu from './menu';
import '../index.css';

class Goals extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <section className="goals" id="goals">
            <div class="row">
                <div class="col s12 m12 l12 center-align">
                    <h3>Quiero aprender</h3>
                    <div class="row">
                        <div class="col s12 m4 l4">
                            <div class="card-panel teal">
                                <span class="white-text">
                                   Ingles
                                </span>
                            </div>
                        </div>
                        <div class="col s12 m4 l4">
                            <div class="card-panel teal">
                                <span class="white-text">
                                    Docker
                                </span>
                            </div>
                        </div>
                        <div class="col s12 m4 l4">
                            <div class="card-panel teal">
                                <span class="white-text">
                                    Microservicios
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m4 l4">
                            <div class="card-panel teal">
                                <span class="white-text">
                                    Laravel Forge
                                </span>
                            </div>
                        </div>
                        <div class="col s12 m4 l4">
                            <div class="card-panel teal">
                                <span class="white-text">
                                    TDD
                                </span>
                            </div>
                        </div>
                        <div class="col s12 m4 l4">
                            <div class="card-panel teal">
                                <span class="white-text">
                                    IA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Goals;
