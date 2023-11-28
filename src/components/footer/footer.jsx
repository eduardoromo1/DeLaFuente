import React from "react";
import "./footer.css";
import {SiGooglemaps} from "react-icons/si";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
      De la Fuente y Asociados
      </a>
      <div className='footer__copyright'>
        <small>&copy;Abogados Calificados</small>
        <p><SiGooglemaps/> Bosque de Duraznos 99, Bosque de las Lomas, Miguel Hidalgo, 11700 Ciudad de México, CDMX</p>
      </div>
      
    </footer>
  );
};

export default footer;
