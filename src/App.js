import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const [tareas, cambiarTareas] = useState(
    [
      {
        id:1,
        nombre: 'Lavar la ropa',
        completada: false
      },
      {
        id:2,
        nombre: 'dasdsa',
        completada: true
      },
    ]
  );

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true);
  console.log(tareas);

  return (
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <FormularioTarea tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarCompletadas={mostrarCompletadas}/>
    </div>
  );
}

export default App;
