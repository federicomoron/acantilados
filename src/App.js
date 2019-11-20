import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/barra';

class App extends Component {
  renderHome = () => <h1>Home</h1>;
  renderproveedores = () => <h1> Proveedores</h1>;

  render(){
    return (
    
      <div className="App">
          <Router>
        <div>
          <Route extact path ="/" component={this.renderHome}/>
          <Route extact path ="/proveedores" component={this.renderproveedores}/>

        </div>
      </Router>
      <div className="container jumbotron ">
        <div id="portal" className="container ">
        <div className="col-lg-8 text-center">
          <Menu /> 
          <img src="logo_acantilado.png"  className="App-logo" alt="logo"></img>
        </div>
  

        </div>
      </div>
    
    
      <hr>
      </hr>
      <div className="container jumbotron">
        <div className="row">
        <div className="col-md-4">
          <h2>Empleados</h2>
          <p>Ve la información de cada uno de los empleados de la empresa. Nombre, teléfono de contacto, dirección, etc.
          </p>
          <p><a className="btn btn-secondary" href="/empleados" role="button">Ver detalles &raquo;</a></p>
        </div>
        <div className="col-md-4">
          <h2>Proveedores</h2>
          <p>Ve la información de cada uno de los proveedores. Nombre, teléfono de contacto, dirección, etc.</p>
          <p><a className="btn btn-secondary" href="/proveedores" role="button"> Ver detalles &raquo;</a></p>
        </div>
        <div className="col-md-4">
          <h2>Productos</h2>
          <p>Ve la información de cada uno de los productos que se venden en nuestros locales. </p>
          <p><a className="btn btn-secondary" href="/productos" role="button">Ver detalles &raquo;</a></p>
        </div>
        <div className="col-md-4">
          <h2>Negocios</h2>
          <p>Ve la información de cada uno de los negocios que tiene la empresa. </p>
          <p><a className="btn btn-secondary" href="/negocios" role="button">Ver detalles &raquo;</a></p>
        </div>
        <div className="col-md-4">
          <h2>Caja</h2>
          <p>Ve el detalle de cada una de las cajas de los distintos negocios. </p>
          <p><a className="btn btn-secondary" href="/caja" role="button">Ver detalles &raquo;</a></p>
        </div>
        <div className="col-md-4">
          <h2>Pedidos</h2>
          <p>Ve el detalle de cada uno de los pedidos de los distintos negocios. </p>
          <p><a className="btn btn-secondary" href="/pedidos" role="button">Ver detalles &raquo;</a></p>
        </div>
        </div>
      </div>
       
    </div>


    );
  }
}



export default App;
