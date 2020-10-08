import React, { Component } from 'react'
import axios from 'axios';

export class Formulario extends Component {
  state = {
    seminarioData: '',
    selectFile : null,
    pago: null
  }
  constructor(props) {
    super(props);
    
    this.nombreChange = this.nombreChange.bind(this)
    this.apellidoChange = this.apellidoChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.direccionChange = this.direccionChange.bind(this)
    this.pagoChange = this.pagoChange.bind(this);
    this.cedulaChange = this.cedulaChange.bind(this);
    this.telefonoChange = this.telefonoChange.bind(this);
}

    style = {
        backgroundImage:  `url('img/fondo-from.png')`,
        with: "100%",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100%",
  };
  getlandingPageData(name) {
    this.setState({seminarioData : name})
  }
  componentDidMount() {
      this.getlandingPageData(localStorage.getItem('nombre_congreso'));
    // localStorage.setItem("seminario", this.props.location.seminario.name)
  }
  cargarImagen = event => {
      this.setState(
          {selectFile: event.target.files[0]}
      )
      console.log()
  }
  pagoChange = async (event) =>{
    await this.setState({pago: event.target.value});
    await localStorage.setItem('tipo_pago',  this.state.pago)
  }
  nombreChange = async (event) =>{
    await localStorage.setItem('nCliente',  event.target.value)
  }
  apellidoChange = async (event) =>{
    await localStorage.setItem('aCliente',  event.target.value)
  }
  emailChange = async (event) =>{
    await localStorage.setItem('email',  event.target.value)
  }
  direccionChange = async (event) =>{
    await localStorage.setItem('direccion',  event.target.value)
  }
  cedulaChange = async (event) =>{
    await localStorage.setItem('cedula',  event.target.value)
  }
  telefonoChange = async (event) =>{
    await localStorage.setItem('telefono',  event.target.value)
  }
  depositoChange = async (event) =>{
    await localStorage.setItem('deposito_num',  event.target.value)
  }
  subirFactura = async () => {
    let min = 1;
    let max = 10000;
    let rand =  await Math.round(Math.random() * (max - min) + min);
    console.log(rand)
    let id_cliente = await localStorage.getItem('id_cliente');
    let id_congreso = await localStorage.getItem('id_congreso');
    let precio = await localStorage.getItem('precio');
    let deposito_num = await localStorage.getItem('deposito_num');
    let iva = 1.12;
    let subtotal = precio;
    let total = Math.round(subtotal * (iva),-1);
    localStorage.setItem('total', total)
    let id_pago = 1;
    const formData = new FormData();
    const date = new Date();
    let fecha = date.getDay()+'/'+ date.getMonth()+ '/' + date.getFullYear()

    const formPago = new FormData();
    formPago.append('tipo_pago', this.state.pago)
    formPago.append('fecha_pago', fecha);
    const pagoPost = await axios.post(
        'http://127.0.0.1:8000/api/get_pagos/',
        formPago
    ).then( async (resp) => {
        id_pago = await resp.data['id_pago']
        localStorage.setItem('id_pago', id_pago)
    })
    formData.append('numero_factura', rand);
    formData.append('comprobante', this.state.selectFile);
    formData.append('subtotal', subtotal);
    formData.append('total', total);
    formData.append('id_pago', id_pago);
    formData.append('id_cliente', id_cliente);
    formData.append('id_congreso_seminario', id_congreso);
    formData.append('numero_deposito',deposito_num)
    const reponse = await axios.post(
        'http://127.0.0.1:8000/api/post_factura/',
        formData
    ).then( async (resp) => { 
        let id_factura = await resp.data['id_factura']
        localStorage.setItem('id_factura', id_factura)
    })
    let cupos_dis = await localStorage.getItem('cupos');
    cupos_dis = await cupos_dis - 1;
    let bandera;
    await axios.get(
        'http://127.0.0.1:8000/api/put_get_congreso/' + localStorage.getItem('id_congreso') + '/'
    ).then(
        async (resp) => {
            let datos = await resp.data;
            datos['cupos'] = cupos_dis;
            delete datos['imagen']
            bandera = await axios.put(
                'http://127.0.0.1:8000/api/put_get_congreso/' + localStorage.getItem('id_congreso') + '/',
                datos
            )
        }
    )

    if(bandera['status']){
        let email = new FormData()
        const nacliente = await localStorage.getItem('nCliente') + ' ' + localStorage.getItem('aCliente')
        await email.append('cliente', nacliente)
        await email.append('cedula', localStorage.getItem('cedula'))
        await email.append('email', localStorage.getItem('email'))
        await email.append('direccion', localStorage.getItem('direccion'))
        await email.append('fecha', fecha)
        await email.append('telefono', localStorage.getItem('telefono'))
        await email.append('factura', rand)
        await email.append('detalle', localStorage.getItem('nombre_congreso'))
        await email.append('precio', subtotal)
        await email.append('subtotal', subtotal)
        await email.append('total', total)
        const repos = axios.post(
            'http://127.0.0.1:8000/api/enviar_correo/',
            email
        )
        window.location.href ='./factura'
    }
  }

  render() {
    return (
        <div style={this.style}>
            <div class="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div class="row justify-content-center align-items-center" style={{ padding: "20px", backgroundColor: "rgb(227,227,227, 0.40)", marginTop: "15px", display: "inline-block", width: "600px", height: "100%" }}>
                    <div class="card">
                        <div class="card-body mr-7 ml-7">
                            <h3 class="card-title text-center mb-3 mt-1" style= {{color: "#021C4F", fontSize: "27px"}}>Formulario de registro para el {this.state.seminarioData}</h3>
                            <form>
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label htmlFor="email"> <b style= {{color: "#183367", fontSize: "14px"}}>Cédula:  </b></label>
                                        <input name="" class="form-control" placeholder="CI" type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={this.cedulaChange}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label htmlFor="email"> <b style= {{color: "#183367", fontSize: "14px"}}>Nº Depósito:  </b></label>
                                        <input name="" class="form-control" placeholder="deposito" type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={this.depositoChange}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="email"> <b style= {{color: "#183367", fontSize: "14px"}}>TipoPago:  </b></label>
                                        <input name="" class="form-control" placeholder="tipo pago" type="text" 
                                            style={{background: "rgba(255, 255, 255, 0.8)"}} onChange={this.pagoChange}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label htmlFor="email"> <b style= {{color: "#183367", fontSize: "14px"}}>Ingresar Nombres:  </b></label>
                                        <input name="" class="form-control" placeholder="nombres..." type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={this.nombreChange}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="password"> <b style= {{color: "#183367", fontSize: "14px"}}>Ingresar Apellidos: </b></label>
                                        <input class="form-control" placeholder="apellidos..." type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={this.apellidoChange}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label htmlFor="email"> <b style= {{color: "#183367", fontSize: "14px"}}>Ingresar Teléfono:  </b></label>
                                        <input name="" class="form-control" placeholder="telefono..." type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={this.telefonoChange}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="password"> <b style= {{color: "#183367", fontSize: "14px"}}>Ingresar Email: </b></label>
                                        <input class="form-control" placeholder="correo..." type="email" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={this.emailChange}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label htmlFor="email"> <b style= {{color: "#183367", fontSize: "14px"}}>Ingresar Dirección:  </b></label>
                                        <input name="" class="form-control" placeholder="direccion..." type="text" style={{background: "rgba(255, 255, 255, 0.8)"}}
                                             onChange={this.direccionChange}/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="password"> <b style= {{color: "#183367", fontSize: "14px"}}>Subir documento: </b></label>
                                        <input type="file" 
                                            style={{background: "rgba(255, 255, 255, 0.8)"}} onChange = {this.cargarImagen}/>
                                    </div>
                                </div>
                                <br/>
                                <div class="row">
                                    <div class="col-md-4">
                                    </div>
                                    <div class="col-md-6">
                                        <button type="submit" class="btn btn-primary btn-block" style={{width: "180px"}} onClick = {this.subirFactura}> Registrar  </button>
                                    </div>
                                    <div class="col-md-3">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
  }
}

export default Formulario;
