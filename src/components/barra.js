import React from 'react';

function Menu() {
  return (
    <div className="barra">
        
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
  
   
</div>
);
}
export default Menu;
