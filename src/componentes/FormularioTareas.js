import React, {useState} from 'react';
import { FaPlusCircle,} from "react-icons/fa";

const FormularioTareas =  ({tareas, cambiarTareas}) => {

    const [inputTarea, cambiarInputTareas] = useState('');

    const handleInput =(e) => {
          cambiarInputTareas(e.target.value);


    }

    const handleSubmit = (e) => {
        e.preventDefault();


        cambiarTareas(
            [
                ...tareas,
                {
                    id: 3,
                    Text: inputTarea,
                    completada:false
                }
            ]
        );



    }



    return (
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input type="text" className="formulario-tareas__input" placeholder="New Task"  value={inputTarea} onChange={(e)=> handleInput(e)}></input>
            <button type="submit" className="formulario-tareas__btn"><FaPlusCircle className="formulario-tareas__icono_btn"/></button>
            

        </form>
    );
}
 
export default FormularioTareas;