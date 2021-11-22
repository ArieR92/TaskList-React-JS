import React from 'react';
import Tarea from '../componentes/Tarea';


const  ListaTareas = ({tareas}) => {
    console.log(tareas);
    return (
    <ul>
        {tareas.map((tarea) => {
            return <Tarea  tarea={tarea} key={tarea.id} />

        })}
    </ul>
    );
}
 
export default  ListaTareas;