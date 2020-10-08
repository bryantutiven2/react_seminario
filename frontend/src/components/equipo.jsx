import React, { Component } from "react";

export class Equipo extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Equipo de Desarrollo</h2>
            <p>
              A continuación se mostrará los miembros del Equipo de Desarrollo de Software
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      {/* <img src={d.img} alt="..." className="team-img" /> */}
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Equipo;
