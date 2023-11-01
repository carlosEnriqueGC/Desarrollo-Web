import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Inicio from './componentes/Inicio';
import SobreMi from './componentes/SobreMi';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contactos';

import menuIcon from './componentes/iconos/menu.png'; // Ruta a la imagen del icono

function App() {
  const [paginaActual, setPaginaActual] = useState('Inicio');
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <Router>
      <div className="App">
        <button className="menu-button" onClick={() => setMenuAbierto(!menuAbierto)}>
          <img src={menuIcon} alt="Menú" /> {/* Usa la imagen como icono */}
        </button>
        <ul className={`navbar ${menuAbierto ? 'menu-abierto' : ''}`}>
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
