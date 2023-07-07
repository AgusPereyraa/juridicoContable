import React, { useState, useEffect } from 'react'
import { Link as Anchor } from 'react-router-dom'
import P from '../P/P'
import Span from '../Span/Span'
import WhatsApp from '../../Img/whatsapp.png'
import './navbar.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);


  // Cambio de estado en el Navbar cuando se scrollea 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cambio de color en navbar al hacer scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (

    <nav>
      <div className={scrolled ? "navbar scrolled" : "navbar"}>

        <div className={`nav_items ${isOpen && "open"}`}>
          <div className='porfile'>

            <div className='porfile-text'>
              <P text='Estudio Juridico Contable' />
              <P text='V & P' />
            </div>

          </div>

          <Anchor to='/'><P text='Inicio' /></Anchor>
          <Anchor to='/services'><P text='Servicios' /></Anchor>
          <Anchor to='/about'><P text='Nosotros' /></Anchor>
          <Anchor to='/prices'><P text='Honorarios' /></Anchor>
          <Anchor to='/contact'><P text='Contacto' /></Anchor>
        </div>

        <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <Span />
          <Span />
          <Span />
        </div>

        <div className='whatsapp-nav'>
          <a href="https://api.whatsapp.com/send?phone=+541122523564&text=Hola%20%C2%BFC%C3%B3mo%20est%C3%A1s?%20Estuve%20mirando%20tu%20Portfolio"
            target="_blank" rel='noreferrer'>
            <img src={WhatsApp} alt="WhatsApp" />
          </a>
        </div>

        <div className='title-nav'>
          <P text='Estudio Juridico Contable' />
          <P text='V & P' />
        </div>

      </div>

    </nav>
  )

}

export default Navbar
