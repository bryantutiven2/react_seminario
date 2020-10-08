import React, { Component, useEffect, useState } from 'react'
import Seminarios from './seminarios';
import {Link, useLocation} from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { jsPDF } from "jspdf";
import PDF from 'react-to-pdf'

const ref = React.createRef();

function Factura(props)  {
    const [congreso, setCongreso] =  useState('');
    const [ncliente, setNcliente] = useState('');
    const [acliente, setAcliente] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ci, setCi] = useState('');
    const [total, setTotal] = useState('');
    const [iva, setIva] = useState('0.12');
    const [subtotal, setSubtotal] = useState('');
    const [id_factura, setIdFactura] = useState('');
    const [fecha, setFecha] = useState('');
    const [tipopago, setTipopago] = useState('');
    const history = useHistory();

    
    useEffect(() => {
      setCongreso(localStorage.getItem('nombre_congreso'))
      setAcliente(localStorage.getItem('aCliente'))
      setNcliente(localStorage.getItem('nCliente'))
      setCi(localStorage.getItem('cedula'))
      setEmail(localStorage.getItem('email'))
      setTelefono(localStorage.getItem('telefono'))
      setDireccion(localStorage.getItem('direccion'))
      setSubtotal(localStorage.getItem('precio'))
      setIdFactura(localStorage.getItem('id_factura'))
      setTipopago(localStorage.getItem('id_pago'))
      // let total = await subtotal * iva;
      setTotal(localStorage.getItem('total'))
      const date = new Date();
      let fecha1 = date.getDay()+'/'+ date.getMonth()+ '/' + date.getFullYear()
      setFecha(fecha1)
    },[]);

    const crearFactura = async ()=> {
      // var $ = require( "jquery" );
      // let div = $('#factura_print')
      let div = await document.getElementById('factura_print').innerHTML;

      let factura_documento = await new jsPDF();

      await factura_documento.addHTML(div, 15, 15)
      // factura_documento.text(25,25, 'Factura por adquirir el servicio de ' + congreso)
      
      // factura_documento.setFont('courier')
      // factura_documento.setFontSize('12')
      // factura_documento.text(25, 50, 'Cliente:  ' + ncliente + " " + acliente)
      // factura_documento.text(25, 100, "Cedula:  " + ci)
      // factura_documento.text(25,150, 'Fecha:  ' +  fecha + '   Email: ' + email )
      // factura_documento.text(25,200, 'Direccion:  ' +  direccion )
      // factura_documento.text(25,250, 'Telefono:  ' + telefono )
      // factura_documento.text(25,300, 'Factura:  ' +  id_factura)
      // factura_documento.text(25,350, 'Cantidad:  1  ')
      // factura_documento.text(25,400, 'Subtotal:  '+ subtotal)
      // factura_documento.text(25,450, 'Iva:  ' + iva)
      // factura_documento.text(25,500, 'Total:  ' + total)
      // factura_documento.text(25,550, 'Gracias por adquirir el Seminario...')

      factura_documento.save("factura"+id_factura+'.pdf');
    }
  
    const regresar = ()=> {
      window.location.href ='./'
    }
//   render() {
    return (
        <div>
          <div style={{margin: "15px", width:"75%", padding:"25px"}} id= "factura_print" ref={ref}>
            <h3>Factura por adquirir el servicio de  {congreso}</h3>
            <br/>
            <p><b>Cliente:</b> {ncliente} {acliente}</p>
            <p><b>Cédula:</b> {ci} <b style={{marginLeft: "110px"}}>Email:</b> {email}</p>
            <p><b>Dirección:</b>{direccion} <b style={{marginLeft: "70px"}}>Fecha:</b> {fecha} </p>
            <p><b>Teléfono:</b> {telefono}</p>
            <br/>
            <p><b>Factura:</b> {id_factura}</p>
            <br/>
            <table style={{width:"75%", border:"1px solid black"}}>
              <thead>
                <tr style={{border:"1px solid black"}}>
                  <th style={{border:"1px solid black", padding: "10px"}}>Cantidad</th>
                  <th style={{border:"1px solid black", padding: "10px"}}>Detalle</th>
                  <th style={{border:"1px solid black", padding: "10px"}}>precio</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{border:"1px solid black"}}>
                  <td style={{border:"1px solid black", padding: "10px"}}>1</td>
                  <td style={{border:"1px solid black", padding: "10px"}}>{congreso}</td>
                  <td style={{border:"1px solid black", padding: "10px"}}>{subtotal}</td>
                </tr>
              </tbody>
            </table>
            <br/>
            <div style={{textAlign:"right", paddingRight: "70px", width:"75%",}}>
              <b>Subtotal: </b> {subtotal}
            </div>
            <div style={{textAlign:"right", paddingRight: "70px", width:"75%",}}>
              <b>Iva: </b> 0.12
            </div>
            <div style={{textAlign:"right", paddingRight: "70px", width:"75%",}}>
              <b>Total: </b> {total}
            </div>
            <div>
              <b><i>Gracias por adquirir el {congreso}</i></b>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <PDF targetRef={ref} filename="factura.pdf">
                {({toPdf}) => 
                  <button onClick = {toPdf}>
                      Generar Factura
                  </button>
                }
            </PDF> 
              </div>
              <div class="form-group col-md-6">
                <button onClick = {()=>regresar()}>
                  Regresar al inicio
                </button>    
              </div>
          </div>
           
          <br/>
          
        </div>
    )
//   }
}

export default Factura
