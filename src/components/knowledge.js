import React from 'react'
import data from '../request/knowledge';
import '../index.css';


export default class Knowledge extends React.Component{

    knowledge_front(){
        return data.knowledge.map(know=>{
            return (
                <p className="item-knowledge">{know.front}</p>
            );
        })
    }

    knowledge_back(){
        return data.knowledge.map(know=>{
            return (
               <p className="item-knowledge">{know.back}</p>
            );
        })
    }

    knowledge_pla(){
        return data.knowledge.map(know=>{
             return (
                <p className="item-knowledge">{know.planificacion}</p>
            );
        })
    }

    knowledge_met(){
        return data.knowledge.map(know=>{
             return (
                <p className="item-knowledge">{know.metodologia}</p>
            );
        })
    }

    knowledge_com(){
        return data.knowledge.map(know=>{
             return (
                <p className="item-knowledge">{know.comunicacion}</p>
            );
        })
    }

    knowledge_ser(){
        return data.knowledge.map(know=>{
             return (
                <p className="item-knowledge">{know.server}</p>
            );
        })
    }

    render(){
        return(
            <section id="conocimientos">
                <div className="row">
                    <div className="col s12 m12 l12 center-align">
                        <h5>Conocimientos</h5>
                        <div className="row">
                            <div className="col s12 m12 l12 center-align">
                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">
                                            FrontEnd
                                        </div>
                                        <div className="collapsible-body">
                                            {this.knowledge_front()}
                                        </div>
                                    </li>
                                </ul>
                                <ul class="collapsible popout" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">
                                            Backend
                                        </div>
                                        <div className="collapsible-body">
                                            {this.knowledge_back()}
                                        </div>
                                    </li>
                                </ul>
                                <ul class="collapsible popout" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">
                                            Repo y Server
                                        </div>
                                        <div className="collapsible-body">
                                            {this.knowledge_ser()}
                                        </div>
                                    </li>
                                </ul>
                                <ul class="collapsible popout" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">
                                            Planificación
                                        </div>
                                        <div className="collapsible-body">
                                            {this.knowledge_pla()}
                                        </div>
                                    </li>
                                </ul>
                                <ul class="collapsible popout" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">
                                            Metodologías
                                        </div>
                                        <div className="collapsible-body">
                                            {this.knowledge_met()}
                                        </div>
                                    </li>
                                </ul>
                                <ul class="collapsible popout" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">
                                            Comunicación
                                        </div>
                                        <div className="collapsible-body">
                                            {this.knowledge_com()}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}