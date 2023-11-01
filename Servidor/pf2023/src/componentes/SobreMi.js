import React from 'react';
import './SobreMi.css';
import imagen from './Imagenes/FOTOPERFIL.jpg';
import imagenExperiencias from './iconos/EX2.png'; // icono de experiencias
import imagenEstudios from './iconos/ES.png'; // icono de estudios
import imagenHabilidades from './iconos/HA.png'; // icono de HABILIDADES


function SobreMi() {
  return (
    <div className="sobre-mi">
      <div className="informacion-personal">
        <div className="cuadro-azul">
          <img src={imagen} alt="Foto de perfil" className="imagen-circular" />
          <h2>Carlos Enrique Guzman Cabrera
          </h2>
          <p>Ingeniero En Sistemas<br />Bachiller en computacion<br />Guatemala, Guatemala</p>

        </div>
      </div>
      <div className="contenido-izquierda">
        <div className="experiencias">
          <h3>
          <img src={imagenExperiencias} alt="Estudios Icon" className="icono-titulo" />Experiencias
          </h3>
          <div className="subtitulo">
            Tecnico en computacion.
          </div>
          <div className="descripcion">
            Sólida experiencia a nivel medio en el campo de reparación y mantenimiento de equipos informáticos y periféricos,
            con un enfoque particular en impresoras utilizadas para la impresión de facturas. Durante mi carrera, he adquirido conocimientos
            significativos en el diagnóstico y solución de problemas tanto en computadoras como en impresoras, lo que me ha permitido contribuir
            de manera efectiva al funcionamiento eficiente de estos dispositivos críticos para las operaciones empresariales.
          </div>
          <div className="subtitulo">
            Coordinador en grupos de programacion.
          </div>
          <div className="descripcion">
            Amplia experiencia liderando equipos de programadores en la creación y diseño de software empresarial.
            Especializado en gestión de proyectos, colaboración interdepartamental y mejora continua de procesos.
            Comprometido con la eficiencia y la calidad en el desarrollo de soluciones empresariales.
          </div>
        </div>
        <div className="estudios">
          <h3> 
          <img src={imagenEstudios} alt="Estudios Icon" className="icono-titulo" /> Estudios
          </h3>
          <div className="subtitulo">
            Bachiller en ciencias y letras con orientacion en computacion.
          </div>
          <div className="descripcion">
            Graduado como Bachiller en Ciencias y Letras con orientación en Computación, lo que ha sido esencial para mi, sentando las bases de mis conocimientos en informática y
            programación, crucial para liderar proyectos y equipos en tecnología.

          </div>
          <div className="subtitulo">
            Ingenieria en sistemas.
          </div>
          <div className="descripcion">
            Actualmente, estoy estudiando Ingeniería en Sistemas en la Universidad Mariano Gálvez, con el objetivo de adquirir
            los conocimientos y habilidades necesarios para abordar desafíos empresariales de manera efectiva.
          </div>
        </div>
        <div className="habilidades">
          <h3>
          <img src={imagenHabilidades} alt="Estudios Icon" className="icono-titulo" /> Habilidades
          </h3>
          <div className="subtitulo">
            Trabajo bajo presion.
          </div>
          <div className="descripcion">
            Una de las habilidades que he desarrollado es la capacidad para trabajar bajo presión, ya que estoy habituado a esa dinámica.
            Esta habilidad me ha permitido mantener un rendimiento efectivo en situaciones desafiantes y demandantes.
          </div>
          <div className="subtitulo">
            Aprendizaje rapido.
          </div>
          <div className="descripcion">
            Una de mis habilidades más valiosas tanto en mi vida académica como personal ha sido mi capacidad de aprendizaje rápido.
            Aunque quizás no sea el más rápido, puedo obtener una comprensión sólida y rápida de lo que se requiere.
            Esta destreza me ha permitido adaptarme con eficacia a nuevas situaciones y desafíos.
          </div>
        </div>
      </div>
    </div>
  );

}

export default SobreMi;