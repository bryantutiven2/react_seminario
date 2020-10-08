import React, { Component } from "react";

export class Temas extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Temas</h2>
          </div>
            <div className="row">
            <div  className="col-xs-6 col-md-3">
              <img src={require('../public/temas/libro.png')} style={{width:'100px'}} alt=""/>
              <h3>Educación</h3>
              <p>Seminarios donde se habla sobre la educación en el país y de cómo podemos mejorarla</p>
            </div>
            <div  className="col-xs-6 col-md-3">
              <img src={require('../public/temas/stats.png')} style={{width:'100px'}} alt=""/>
              <h3>Finanzas</h3>
              <p>Rama de la administración de empresas y de la economía</p>
            </div>
            <div  className="col-xs-6 col-md-3">
              <img src={require('../public/temas/sketch.png')} style={{width:'100px'}} alt=""/>
              <h3>Arquitectura</h3>
              <p>Parte y la técnica de proyectar, diseñar y construir edificios, ​ modificando el hábitat humano</p>
            </div>
            <div  className="col-xs-6 col-md-3">
              <img src={require('../public/temas/code.png')} style={{width:'100px'}} alt=""/>
              <h3>Desarrollo web</h3>
              <p>Creación de sitios web para Internet o una intranet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Temas;
