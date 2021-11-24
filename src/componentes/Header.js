import React from 'react';
import { FaEyeSlash, FaEye} from "react-icons/fa";

const Header  = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
const toggleCompletadas =() => {
    cambiarMostrarCompletadas(!mostrarCompletadas);

    
}

    return (
        <header className="header">
            <h1 className="header__titulo">Tasks List</h1>
            { mostrarCompletadas ?
                  <button onClick = {() => toggleCompletadas()} className="header__boton">
                   Hide not completed <FaEyeSlash className="header__icono-boton"/>
                  </button> 
                  :
                  <button onClick = {() => toggleCompletadas()} className="header__boton">
                   Show completed <FaEye className="header__icono-boton"/>
                  </button>
            }
            
        </header>
    );
}
 
export default Header;
