import React from 'react';
import './Contacto.css';

import github from './iconos/github_black.png';
import git from './iconos/git_black.png';
import nombre from './iconos_Contactos/tarjeta-de-identificacion.png';
import estudio from './iconos_Contactos/Estudio.png';
import ubicacion from './iconos_Contactos/ubicacion.png';
import numero from './iconos_Contactos/llamada-telefonica.png';
import correo from './iconos_Contactos/correo.png';

function Contactos() {
  const emailAddress = 'cguzmanc10@miumg.edu.gt';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="Contacto">
      <div className="informacion_contacto">
        <div className="informacion1">
          <div className="contacto_general">
            <p><img src={nombre} alt="Nombre" className="icono-titulo" /> Carlos Enrique Guzman Cabrera</p>
            <p><img src={estudio} alt="Estudio" className="icono-titulo" /> Ingeniero en sistemas</p>
            <p><img src={estudio} alt="Estudio" className="icono-titulo" /> Bachiller en computacion</p>
            <p><img src={ubicacion} alt="Ubicacion" className="icono-titulo" /> Guatemala, Guatemala</p>
            <p><img src={numero} alt="Telefono" className="icono-titulo" /> 54983071</p>

          </div>
        </div>
        <div className="informacion2">
          <div className="Descripcion_contacto">
            <p>Informacion de contacto.</p>
            <p>Puedes contactarme por mi correo electrónico:</p>
            <p><a href="mailto:cguzmanc10@miumg.edu.gt" onClick={handleEmailClick}>cguzmanc10@miumg.edu.gt</a></p>
            <img src={correo} alt="Correo" className="icono-titulo" />
            <img src={github} alt="GitHub" className="icono-titulo" />
            <img src={git} alt="Git" className="icono-titulo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactos;
