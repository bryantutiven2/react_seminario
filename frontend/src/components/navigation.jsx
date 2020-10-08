import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Login from './Login';
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Proyecto Seminarios
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Temas
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Seminarios
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contactenos
                </a>
              </li>
              {/* <li>
              <Link to="/login" className="link">Login</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
