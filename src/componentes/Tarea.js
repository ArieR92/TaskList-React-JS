import React from 'react';
import {FaCheckCircle, FaPencilAlt, FaTimes} from "react-icons/fa";

const  Tarea = ({tarea}) => {
    return (
        
        <li  className="lista-tareas__tarea">
            <div className="lista-tareas__texto">
                <FaCheckCircle className="lista-tareas__icono lista-tareas__icono-check"/>
                {tarea.texto}
            </div>


            <div className="lista-tareas__contenedor-botones">
                    <FaPencilAlt  className="lista-tareas__icono lista-tareas__icono-accion"/>
                    <FaTimes  className="lista-tareas__icono lista-tareas__icono-accion"/>

            </div>
                
                
            
        </li>
      );
}
 
export default Tarea ;
