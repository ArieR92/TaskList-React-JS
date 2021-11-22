import React, {useState} from 'react';
import {FaCheckCircle, FaPencilAlt, FaTimes} from "react-icons/fa";

const  Tarea = ({tarea}) => {
const [editandoTarea, cambiarEditandoTarea] = useState(false);
const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);
const handleSubmit = (e) => {e.preventDefault(); cambiarEditandoTarea(false)};


    return (
        
        <li  className="lista-tareas__tarea">
            <div className="lista-tareas__texto">
                <FaCheckCircle className="lista-tareas__icono lista-tareas__icono-check"/>
                {editandoTarea ? 
                <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                    <input type="text" className="formulario-editar-tarea__input" value={nuevaTarea} onChange={(e) => cambiarNuevaTarea(e.target.value)}/>
                    <button type="submit" className="formulario-editar-tarea__btn">Actualizar</button>

                </form>
                :
                tarea.texto
                }
                

            </div>


            <div className="lista-tareas__contenedor-botones">
                    <FaPencilAlt  className="lista-tareas__icono lista-tareas__icono-accion" onClick={() => cambiarEditandoTarea (!editandoTarea)}/>
                    <FaTimes  className="lista-tareas__icono lista-tareas__icono-accion"/>

            </div>
                
                
            
        </li>
      );
}
 
export default Tarea ;
