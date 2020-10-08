import React, { Component, useState, useEffect } from "react";
import Login from './Login';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Seminarios() {

  const [seminarios, setSeminarios] =  useState(null);


  const cargar_seminarios = async () =>{
    let response = await fetch('http://127.0.0.1:8000/api/get_congresos/');
    let data = await response.json();
    setSeminarios(data)
    // let data = await response.json();
    // this.state = {data: data}
    console.log(data)
  }

  useEffect(() => {
    cargar_seminarios();
  }, []);

  const guardarSeminario = async (m) =>{
    console.log(m)
    await localStorage.setItem('id_congreso', m.id_congreso_seminario);
    await localStorage.setItem('nombre_congreso', m.nombre_congreso);
    await localStorage.setItem('precio', m.precio);
    await localStorage.setItem('cupos', m.cupos)
    window.location.href = './login'
  }
  // render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Seminarios Disponibles</h2>
            <p>
              A continuación, puede navegar entre los seminarios y cursos 
            </p>
          </div>
          <div className="row">
            {seminarios
              ? seminarios.map((d, i) => (
                  <div  key={`${d.nombre_congreso}-${d.id_congreso_seminario}`} className="col-md-4">
                    {" "}
                      <div style={{backgroundColor: 'white', margin:"10px", padding:"8px"}}>
                        <img src={'http://127.0.0.1:8000'+d.imagen} style={{width:'200px'}} alt=""/>
                        <h3 style={{color: "black"}}>{d.nombre_congreso}</h3>
                        <p style={{color: "black", textAlign: "justify"}}>{d.detalle}</p>
                        <div>
                        <b style={{color: "black", marginRight: "10px"}}>Dirección:</b><i style={{color: "black"}}> {d.direccion}</i>
                        </div>
                        <hr style={{width:"100%"}}/>
                        <div>
                          <b style={{color: "black", marginRight: "10px"}}>Fecha:</b><i style={{color: "black"}}> {d.fecha}</i>
                          <b style={{color: "black", marginLeft: "10px"}}>Precio:</b><i style={{color: "black"}}> {d.precio}</i>
                        </div>
                        <div>
                          <b style={{color: "black", marginRight: "10px"}}></b><i style={{color: "black"}}> {d.banco}</i>
                          <b style={{color: "black", marginLeft: "10px"}}>Cuenta:</b><i style={{color: "black"}}> {d.numero_cuenta}</i>
                        </div>
                        <br/>
                        <div style={{marginBottom: "10px"}}>
                          <a className="link" onClick={() => guardarSeminario(d)}><a style={{marginRight: "30px"}}>Registrarme</a></a>
                          <b style={{color: "black", marginRight: "10px"}}>Cupos disponibles:</b><i style={{color: "black"}}> {d.cupos}</i>
                        </div>
                      </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  // }
}

export default Seminarios;
