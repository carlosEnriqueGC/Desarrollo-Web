import React, { useState } from 'react'; // Importa 'useState' desde React
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Inicio from './componentes/Inicio';
import SobreMi from './componentes/SobreMi';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contactos';

function App() {
  const [paginaActual, setPaginaActual] = useState('Inicio'); // Estado para rastrear la página actual
  return (
    <Router>
      <div className="App">
        <ul className="navbar">
          <li>
            <Link to="/Inicio" onClick={() => setPaginaActual('Inicio')} className={paginaActual === 'Inicio' ? 'active' : ''}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/SobreMi" onClick={() => setPaginaActual('SobreMi')} className={paginaActual === 'SobreMi' ? 'active' : ''}>
              Sobre Mi
            </Link>
          </li>
          <li>
            <Link to="/Proyectos" onClick={() => setPaginaActual('Proyectos')} className={paginaActual === 'Proyectos' ? 'active' : ''}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/Contactos" onClick={() => setPaginaActual('Contactos')} className={paginaActual === 'Contactos' ? 'active' : ''}>
              Contacto
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Contactos" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
