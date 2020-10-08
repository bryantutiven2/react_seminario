import React, { Component, useEffect, useState } from 'react'
import Seminarios from './seminarios';
import {Link, Redirect, Router} from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import  Formulario from './FormularioRegistro';
import { useLocation } from "wouter";

function Registro(props)  {
    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');


    const registrar = async () =>{
        if(email && password &&  nombre && apellido && cedula && telefono){
            let cliente = new FormData()
            await cliente.append('nombre', nombre)
            await cliente.append('apellido', apellido)
            await cliente.append('email', email)
            await cliente.append('password', password)
            await cliente.append('cedula', cedula)
            await cliente.append('telefono', telefono)
            const response = await axios.post(
                'http://127.0.0.1:8000/api/guardar_cliente/',
                cliente
                )
            if(response.status){
                alert("Registro Exitoso")
            }
            else{
                alert("No se ha podido registrar su cuenta")
            }
            
        }
    }

    const style = {
        backgroundImage:  `url('img/login-fondo.png')`,
        with: "100%",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100%",
  };

//   render() {
    return (
        
        <div style={style}>
            <div class="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div class="row justify-content-center align-items-center" style={{ padding: "20px", backgroundColor: "rgb(227,227,227, 0.40)", marginTop: "120px", display: "inline-block", width: "800px", height: "100%" }}>
                    <div class="card">
                        <div class="card-body mr-5 ml-5">
                            <h3 class="card-title text-center mb-3 mt-1" style= {{color: "black", fontSize: "24px"}}>Iniciar Sesión</h3>
                            <br/>
                            <form onSubmit={registrar}>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label htmlFor="nombre"> <b style= {{color: "#183367", fontSize: "14px"}}>Nombre:  </b></label>
                                        <input name="" class="form-control" placeholder="nombre" type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={e => setNombre(e.target.value)}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="apellido"> <b style= {{color: "#183367", fontSize: "14px"}}>Apellido:  </b></label>
                                        <input name="" class="form-control" placeholder="apellido" type="text" 
                                            style={{background: "rgba(255, 255, 255, 0.8)"}} onChange={e => setApellido(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label htmlFor="email"> <b style= {{color: "#183367", fontSize: "14px"}}>Email:  </b></label>
                                        <input name="" class="form-control" placeholder="email" type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="password"> <b style= {{color: "#183367", fontSize: "14px"}}>Password:  </b></label>
                                        <input name="" class="form-control" placeholder="password" type="password" 
                                            style={{background: "rgba(255, 255, 255, 0.8)"}} onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label htmlFor="email"> <b style= {{color: "#183367", fontSize: "14px"}}>Cedula:  </b></label>
                                        <input name="" class="form-control" placeholder="cedula" type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={e => setCedula(e.target.value)}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="password"> <b style= {{color: "#183367", fontSize: "14px"}}>Teléfono:  </b></label>
                                        <input name="" class="form-control" placeholder="telefono" type="text" 
                                            style={{background: "rgba(255, 255, 255, 0.8)"}} onChange={e => setTelefono(e.target.value)}/>
                                    </div>
                                </div>

                                <br/>
                                <div class="row">
                                    <div class="col-md-4">
                                    </div>
                                    <div class="col-md-6">
                                        <button class="btn btn-success btn-block" style={{width: "180px"}} > Registrar Cuenta  </button>
                                    </div>
                                    <div class="col-md-3">
                                    </div>
                                </div>
                            </form>
                            <br/>
                            
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
//   }
}

export default Registro 
