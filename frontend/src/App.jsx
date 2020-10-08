import React, { Component } from 'react';
import AppCore from './components/AppCore';
import Login from './components/Login';
import Registro from './components/Registro'
import Formulario from './components/FormularioRegistro'
import Factura from './components/factura'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      
      <BrowserRouter>
          {/* <Redirect
            from="/"
            to="/home" /> */}
          <Switch>
            <Route
              exact
              path="/formulario-registro"
              render={() => <Formulario />}
              // component = {Formulario} 
              />
            <Route
              exact
              path="/login"
              render={() => <Login />}
              // component = {Login} 
              />
            <Route
              exact
              path="/registro"
              render={() => <Registro />}
              // component = {Formulario} 
              />
            <Route
              exact
              path="/factura"
              render={() => <Factura />}
              // component = {Factura} 
              />
            <Route
              exact
              path="/"
              component={AppCore} />
            
            {/* <Route
              exact
              path="/page2"
              render={() => <Page2 />} /> */}
            {/* <Route component={PageError} /> */}
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
