import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App"> adsfasdgasdg
      
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/">Menú</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <div id="menu" className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/proveedores">Proveedores<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/empleados"> Empleados</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/productos">Productos</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/pedidos">Pedidos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/negocios">Negocios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/cajas">Cajas</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="sesion" className="col-lg-6 col-md-8 col-sm-12 col-xs-12 ">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Usuario" aria-label="usuario"></input>
            <input className="form-control mr-sm-2" type="password" placeholder="Contraseña" aria-label="contrasena"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Iniciar Sesion</button>
          </form>
        </div>
      </nav>
      <div className="container jumbotron ">
        <div id="portal" className="container ">
        <div className="col-lg-8 text-center">
          <img src="logo_acantilado.png"  className="App-logo" alt="logo"></img>
        </div>
            
          <h1 className="display-3 ">Bienvenido a Los Acantilados!!!</h1>
      <p>Cómo comienzas tu día es cómo vives tu día. Cómo vives tu día es cómo vives tu vida.</p>
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

export default App;
