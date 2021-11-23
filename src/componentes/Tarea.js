import React, {useState} from 'react';
import {FaCheckCircle, FaPencilAlt, FaTimes, FaCircle} from "react-icons/fa";

const  Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {
const [editandoTarea, cambiarEditandoTarea] = useState(false);
const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);
const handleSubmit = (e) => {e.preventDefault(); editarTarea(tarea.id, nuevaTarea); cambiarEditandoTarea(false)};


    return (
        
        <li  className="lista-tareas__tarea">
            <div className="lista-tareas__texto">
                {tarea.completada ? <FaCheckCircle className="lista-tareas__icono lista-tareas__icono-check" onClick = {() => toggleCompletada(tarea.id)}/> : <FaCircle className="lista-tareas__icono lista-tareas__icono-check" onClick = {() => toggleCompletada(tarea.id)}/>}
                
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
                    <FaTimes  className="lista-tareas__icono lista-tareas__icono-accion" onClick={() => borrarTarea (tarea.id)}/>

            </div>
                
                
            
        </li>
      );
}
 
export default Tarea ;
