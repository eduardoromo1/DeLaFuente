import React from "react";
import "./experience.css";
import { HiShieldCheck } from "react-icons/hi";

const experience = () => {
  return (
    <section id='experience'>
      
      <h2>Perfil de la empresa</h2>

      <div className='container_exp experience__container'> 
        <div className='experience__backend'>
          <h3>Misión</h3>
          <div className='experince__content'>
            <article className='experince__details'>
              <HiShieldCheck className='experince__details-icon' />
              <div>
                <h4>
                "La misión de nuestra firma de abogados es proporcionar asesoramiento legal de alta calidad y representación efectiva a nuestros clientes. Nos comprometemos a defender los intereses y derechos de nuestros clientes con integridad, ética y profesionalismo. Buscamos soluciones innovadoras y estratégicas para resolver los desafíos legales de manera eficiente y efectiva. Valoramos la confianza de nuestros clientes y trabajamos incansablemente para superar sus expectativas. Nuestra firma se esfuerza por ser líder en el campo del derecho, manteniendo la excelencia en el servicio y el compromiso con la justicia."
                </h4>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Vision</h3>
          <div className='experince__content'>
            <article className='experince__details'>
              <HiShieldCheck className='experince__details-icon' />
              <div>
                
                <h4>
                "Nuestra visión es ser reconocidos como líderes innovadores en el campo del derecho, distinguiéndonos por nuestra excelencia en el asesoramiento legal y la representación efectiva. Aspiramos a ser una firma de abogados que no solo resuelve los problemas legales de nuestros clientes, sino que también contribuye positivamente a la comunidad y a la sociedad en su conjunto. Buscamos ser un referente en la promoción de la justicia, la equidad y la integridad en cada caso que tomamos. A medida que avanzamos, nos esforzamos por ser un lugar de trabajo donde la diversidad, la inclusión y la colaboración son fundamentales para nuestro éxito y crecimiento continuo."
                </h4>
             
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
