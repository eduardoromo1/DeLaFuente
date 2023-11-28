import React from 'react'
import "./testimonial.css"
import { Data } from "./Data"
import { Swiper, SwiperSlide } from "swiper/react";
import {RiStarSFill} from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    
    <section className='testimonial container section'>
      <br/>
      <br/>
      <br/>
      <br/>
      <h5 ></h5>
      <h2 >Satisfacción</h2>

      <Swiper className='testimoial__container'
        loop = {true}
        grabCursor = {true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          }
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, Descripcion }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <img src={image} alt=""
                className='testimonial__img' />
              <h3 className='testimonial__name'>{title}</h3>
              <p className='testimonial__description'>{Descripcion}</p>
              <RiStarSFill className='about__icon'/>
              <RiStarSFill className='about__icon'/>
              <RiStarSFill className='about__icon'/>
              <RiStarSFill className='about__icon'/>  
            </SwiperSlide>
          )
        })}
      </Swiper>

    </section>
  )
}

export default Testimonials
