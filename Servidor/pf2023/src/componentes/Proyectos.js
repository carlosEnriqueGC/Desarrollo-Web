import React from 'react';
import './Proyectos.css';
import imagen from './Imagenes/FOTOPERFIL.jpg';
import imagenProyectos from './iconos/Proyectos.png';
import github from './iconos/github.png';
import git from './iconos/git.png';
import Ljava from './iconos/java.png';
import Emu8086 from './iconos/procesador.png';

function Proyectos() {
  return (
    <div className="Proyectos">
      <div className="banner">
        <div className="banner1">
          <div className="imagen-nombre">
            <img src={imagen} alt="Foto de perfil" className="perfil" />
            <h4>Carlos Enrique Guzman Cabrera</h4>
          </div>
        </div>
        <div className="banner2">
          <div className="descripcionG">
            Durante mi carrera estudiantil, he tenido la oportunidad de iniciar y participar en diversos proyectos. Estas experiencias han sido enriquecedoras y han contribuido significativamente a mi desarrollo profesional y personal.
            A continuación, compartiré algunos de los proyectos en los que he estado involucrado.

            <br />
            La mayoría de mis proyectos están alojados en la plataforma de GitHub utilizando la herramienta Git.
            <br /><br />
            <img src={github} alt="Estudios Icon" className="icono-titulo" />
            <img src={git} alt="Estudios Icon" className="icono-titulo" />
          </div>
        </div>
      </div>
      <div className="contenido">
        <h3>
          <img src={imagenProyectos} alt="Estudios Icon" className="icono-titulo" />Proyectos
        </h3>
        <div className="proyectos-container">
          <div className="proyecto">
            <div className="titulo2">Analizador Lexico</div>
            <div className="informacion">
              Es un proyecto del curso de compiladores que consistio en realizar un escáner léxico tokenizer en un compilador
              o intérprete divide el código en piezas más pequeñas llamadas "tokens", que son partes básicas del lenguaje de programación,
              como palabras clave o números.

              <br /><br />
              <a href="https://github.com/carlosEnriqueGC/Proyecto_Compiladores" target="_blank" rel="noopener noreferrer">Más detalles</a>
            </div>
          </div>
          <div className="proyecto">
            <div className="titulo2">Menu de opciones en ensamblador Emu8086</div>
            <div className="informacion">
              Este proyecto del curso de arquitectura de computadoras ofrece un menú con opciones que abarcan operaciones matemáticas,
              manipulación de cadenas, cálculo de series aritméticas y un juego llamado pong. 
              <br /><br />
              <a href="https://github.com/carlosEnriqueGC/ARQUITECTURA_2" target="_blank" rel="noopener noreferrer">Más detalles</a>
            </div>
          </div>
          <div className="proyecto">
            <div className="titulo2">Administrador de procesos</div>
            <div className="informacion">
              Este proyecto se trata de un administrador de tareas funcional realizado en Netbeans escrito totalmente en lenguaje java 
              este mismo funciona igual que el administrador de tareas de windows, este proyecto incluye dos soluciones uno utiliza el 
              algoritmo de Round Robin y el otro ya es el administrador de tareas que conoces desde windows.
              <br /><br />
              <a href="https://github.com/carlosEnriqueGC/ProyectoAdministradorProcesos" target="_blank" rel="noopener noreferrer">Más detalles</a>
            </div>
          </div>

          <div className="proyecto">
            <div className="titulo2">lenguajes de programacion utilizos</div>
            <div className="informacion">
            <p><img src={Ljava} alt="Nombre" className="icono-titulo" /> Lenguaje Java</p>
            <p><img src={Emu8086} alt="Nombre" className="icono-titulo" /> Lenguaje Ensamblador</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
