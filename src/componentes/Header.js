import React from 'react';
import { FaEyeSlash,} from "react-icons/fa";

const Header  = () => {
    return (
        <header className="header">
            <h1 className="header__titulo">Tasks List</h1>
            <button className="header__boton">
               Hide not completed <FaEyeSlash className="header__icono-boton"/>
            </button>
        </header>
    );
}
 
export default Header;
