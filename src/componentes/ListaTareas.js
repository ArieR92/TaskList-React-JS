import React from 'react';
import Tarea from '../componentes/Tarea';

/*funcion para chequear tarea*/
const  ListaTareas = ({tareas, cambiarTareas}) => {
const toggleCompletada = (id) => {
    console.log("estamos editando la tarea con id", id);
    cambiarTareas(tareas.map( (tarea) => {
        if (tarea.id === id){
            return {...tarea, completada: !tarea.completada}

        }
        return tarea;
        
    } ));

}

/*funcion para editar tarea*/
const editarTarea = (id, nuevoTexto) => {
    console.log("estamos editando la tarea con id", id);
    cambiarTareas(tareas.map( (tarea) => {
        if (tarea.id === id){
            return {...tarea, texto: nuevoTexto}

        }
        return tarea;
        
    } ));

}


/*funcion para borrar tarea*/
const borrarTarea = (id) => {
    cambiarTareas(tareas.filter ((tarea) => {
    if (tarea.id !== id) {
        return tarea;
    }
    return;
    }));
}

    return (
    <ul>
        {tareas.map((tarea) => {
            return <Tarea  tarea={tarea}
                           key={tarea.id} 
                           toggleCompletada={toggleCompletada}
                           editarTarea={editarTarea}
                           borrarTarea= {borrarTarea}
                    />

        })}
    </ul>
    );
}
 
export default  ListaTareas;