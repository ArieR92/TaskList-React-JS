import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';



const App = () => {
//obtenemos las tareas guardadas de local storage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas'))  : [];



//establecemos el estado de las tareas
  console.log(tareasGuardadas);
  const [tareas, cambiarTareas] = useState (tareasGuardadas);



  //guardando el estado dentro de local storage

  useEffect( () => {
    localStorage.setItem('tareas',JSON.stringify(tareas));
    },[tareas]);

  //accedemos a localStorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;}
  else { configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';

    }


  //el estado de mostrarCompletadas  

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  useEffect( () => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
    },[mostrarCompletadas]);


  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas = {tareas} cambiarTareas = {cambiarTareas} mostrarCompletadas = {mostrarCompletadas}/>
    
      
    </div>
  
  );
}

export default App;