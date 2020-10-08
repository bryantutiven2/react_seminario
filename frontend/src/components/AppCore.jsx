import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Temas from './temas';
import Sobre from './sobre';
import Seminarios from './seminarios';
import Equipo from './equipo';
import Contactenos from './contactenos';
import JsonData from '../data/data.json';
export class AppCore extends Component {
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
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Temas data={this.state.landingPageData.Features}/>
        <Sobre  data={this.state.landingPageData.About}/>
        <Seminarios  data={this.state.landingPageData.Services}/>
        <Equipo  data={this.state.landingPageData.Team}/>
        <Contactenos  data={this.state.landingPageData.Contact}/>
      </div>
    )
  }
}

export default AppCore
