import React from 'react';
import './Inicio.css';
import foto from './Imagenes/FOTOPERFIL.jpg';

function Inicio() {
  return (
    <div className="inicio">
      <div className="content">
        <div className="imagen">
          <img src={foto} alt="Tu foto" className="profile-image" />
        </div>
        <div className="contenido">
          <h1>Bienvenido a mi Currículum</h1>
          <div className="categories">
            <div className="category">Tecnología</div>
            <div className="category">Juegos</div>
            <div className="category">Autos</div>
            <div className="category">Futbol</div>
            <div className="category">Informatica</div>
          </div>
          <div className="quote-description">
            <span className="quotation-mark">"</span>
            <p>
              Como joven estudiante, albergo el firme sueño de completar mi formación
              académica y obtener el título de ingeniero en sistemas. Este anhelo no solo
              representa un logro personal, sino también la culminación de una dedicación
              incansable hacia el campo de la ingeniería y la informática. A lo largo de mi
              travesía estudiantil, he experimentado la emoción y el desafío de explorar
              conceptos y tecnologías vanguardistas, que me han permitido desarrollar una
              comprensión más profunda de cómo los sistemas informáticos impactan en el
              mundo moderno. Estoy decidido a seguir profundizando en este campo, adquirir
              conocimientos especializados y contribuir al avance tecnológico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
