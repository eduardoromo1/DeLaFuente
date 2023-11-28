import React from "react";
import "./header.css";
import ME from "../../assets/ab1.png";

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h1>De la Fuente y Asociados</h1>
        <h5 className='text-ligth'> Abogados Calificados </h5>   
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        
      </div>
    </header>
  );
};

export default header;
