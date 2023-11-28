import React from "react";
import "./about.css";
import ME from "../../assets/ab2.jpg";
import ME1 from "../../assets/ab3.jpg";
import ME2 from "../../assets/ab4.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";


const about = () => {
  return (
    <section id='about'>
      <h3>Nuestros Servicios</h3>
      <h2> Penalistas </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Experiencia</h5>
              <small>Más de 40 años </small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='about__icon' />
              <h5>Casos Resueltos</h5>
              <small>Más de 400 casos resueltos</small>
            </article>

            <article className='about__card'>
              <BsPersonCircle className='about__icon' />
              <h5>Clientes</h5>
              <small>Más de 230 clientes satisfechos</small>
            </article>
          </div>
          <p>
          "La justicia no siempre se obtiene en el tribunal; a veces se obtiene en la calle, haciendo lo correcto." - Abraham Lincoln
          </p>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      

      <h2> Bancario y Financiero </h2>
      <div className='container about__container'>
        

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Experiencia</h5>
              <small> Más de 30 años de Experiencia </small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='about__icon' />
              <h5>Casos Resueltos</h5>
              <small>Más de 200 casos Resueltos</small>
            </article>

            <article className='about__card'>
              <BsPersonCircle className='about__icon' />
              <h5>Clientes</h5>
              <small>Más de 30 clientes satisfechos</small>
            </article>
          </div>
          <p>
          "Los abogados son los pilares de la sociedad; sobre ellos descansa el edificio del orden y la justicia." - Joseph Story
          </p>
        </div>
        <div className='about__me'>
          <div className='about__me-image2'>
            <img src={ME1} alt='About Image' />
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      
  
      <h2> Laboral </h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image2'>
            <img src={ME2} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Experiencia</h5>
              <small>Más de 30 años </small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='about__icon' />
              <h5>Casos Resueltos</h5>
              <small>Más de 200 casos resueltos</small>
            </article>

            <article className='about__card'>
              <BsPersonCircle className='about__icon' />
              <h5>Clientes</h5>
              <small>Más de 150 clientes satisfechos</small>
            </article>
          </div>
          <p>
          "El abogado es un artista del equilibrio y del compromiso, no puede permitirse el lujo de ser radical." - Arthur Miller
          </p>
      
        </div>
      </div>
      
    </section>

    
  );
};

export default about;
