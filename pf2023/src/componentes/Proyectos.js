import React, { useContext } from 'react';
import './Proyectos.css';

// Ejemplo de datos de proyectos
const proyectosData = [
  {
    id: 1,
    titulo: 'Proyecto 1',
    descripcion: 'Descripción del proyecto 1.',
    enlace: 'enlace_proyecto_1',
  },
  {
    id: 2,
    titulo: 'Proyecto 2',
    descripcion: 'Descripción del proyecto 2.',
    enlace: 'enlace_proyecto_2',
  },
  {
    id: 3,
    titulo: 'Proyecto 3',
    descripcion: 'Descripción del proyecto 3.',
    enlace: 'enlace_proyecto_3',
  },
];

function Proyectos() {
  return (
    <div className="proyectos">
      <h2>Mis Proyectos</h2>
      <ul>
        {proyectosData.map((proyecto) => (
          <li key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Proyectos;
