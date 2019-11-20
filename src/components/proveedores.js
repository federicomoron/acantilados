/*import React from 'react';
import Menu from './barra';


function Fproveedores() {
        
 return (
    <div className="proveedores">
        <Menu /> 
     <div className="notesContainer" ></div>
        <div className="notesHeader" >
            <h1>React y Firebase App</h1>
        </div>
    
     <div className="notesFooter" >

     </div>
     
    </div>
);
}
export default Fproveedores;
*/
import React from 'react';
import PropTypes from 'prop-types';

const proveedores =( { name, cuil}) => {
    return (
        <div>
            <h2>Formulario Proveedro></h2>
            <h3>Nombre: {name} / Cuil: {cuil}</h3>
        </div>
            
    );
};

proveedores.PropTypes = {
    name: PropTypes.string,
    cuil: PropTypes.string,
};

export default proveedores;