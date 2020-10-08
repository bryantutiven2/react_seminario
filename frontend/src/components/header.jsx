import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                  CORPCITI cursos y seminarios
                    <span></span>
                  </h1>
                  <p>
                  Bienvenido a la página donde encontrará disponibles seminarios de distintos temas académicos, con exposiciones, talleres. \n Para ver los temás de click en Ver Más o Ver Seminarios!
                  </p>
                  <div style={{textAlign:"center"}}>
                    <a
                      style={{marginRight:"15px"}}
                      href="#features"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      Ver Más
                    </a>{" "}
                    <a
                    href="#services"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Ver Seminarios
                  </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
