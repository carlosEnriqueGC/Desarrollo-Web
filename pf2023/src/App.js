import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  // Importa 'Routes' y 'Route'

import Inicio from './componentes/Inicio';
import SobreMi from './componentes/SobreMi';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contactos';  // Asegúrate de que el nombre del archivo coincida con la ubicación.

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="navbar">
          <li>
            <Link to="/Inicio">Inicio</Link>  {/* Corrige las rutas aquí */}
          </li>
          <li>
            <Link to="/SobreMi">SobreMi</Link>
          </li>
          <li>
            <Link to="/Proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/Contactos">Contacto</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/Inicio" element={<Inicio />} />  {/* Corrige las rutas aquí */}
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Contactos" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
