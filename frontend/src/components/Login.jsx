import React, { Component, useEffect, useState } from 'react'
import Seminarios from './seminarios';
import {Link, Redirect, Router} from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import  Formulario from './FormularioRegistro';
import { useLocation } from "wouter";

function Login(props)  {
    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [ estado, setEstado ] = useState(false);
    const [, navigate] = useLocation()
    const navegar = async () =>{
        if(email!='' && password!=''){
            const response = await axios.get(
                'http://127.0.0.1:8000/api/obtener_clientes/'+email+'/'+password+'/'
                )
            await localStorage.setItem('id_cliente', response.data['id_cliente'])
            console.log(response.status)
    
            if(response.status){
                window.location.href ='./formulario-registro'
            }
            else{
                alert("Crendenciales invalidas  ")
            }
        }
    }
    const registar_pagina = ()=>{
        window.open('/registro')
    }
    const style = {
        backgroundImage:  `url('img/login-fondo.png')`,
        with: "100%",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100%",
  };

    return (
        
        <div style={style}>
            <div class="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div class="row justify-content-center align-items-center" style={{ padding: "20px", backgroundColor: "rgb(227,227,227, 0.40)", marginTop: "120px", display: "inline-block", width: "300px", height: "100%" }}>
                    <div class="card">
                        <div class="card-body mr-5 ml-5">
                            <h3 class="card-title text-center mb-3 mt-1" style= {{color: "black", fontSize: "24px"}}>Iniciar Sesión</h3>
                            <br/>
                            <form onSubmit={navegar}>
                                <div class="form-group">
                                    <div class="input-group">
                                    <label htmlFor="email"> <b style= {{color: "black", fontSize: "14px"}}>Ingresar Email:  </b></label>
                                    </div>
                                    <div class="input-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <input name="" class="form-control" placeholder="Email" type="email" style={{width: "250px"}} 
                                            onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <div class="input-group">
                                    <label htmlFor="password"> <b style= {{color: "black", fontSize: "14px"}}>Ingresar Contraseña: </b></label>
                                    </div>
                                    <div class="input-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <input class="form-control" placeholder="Password" type="password" style={{width: "250px"}}
                                            onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <br/>
                                <div class="form-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <button type="submit" class="btn btn-primary btn-block" style={{width: "180px"}} 
                                            >
                                            Login
                                        </button>
                                </div>
                            </form>
                            <br/>
                                <div class="form-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <button class="btn btn-light btn-block" style={{width: "180px"}} 
                                            onClick={()=>{registar_pagina()}}>
                                            Registrarme
                                        </button>
                                </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Login   
