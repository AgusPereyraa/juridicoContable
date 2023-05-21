import React from 'react'
import Phone from '../../Img/phone.svg'
import Mail from '../../Img/mail-opened.svg'
import Location from '../../Img/pin-alt.svg'
// import { Link as Anchor, } from "react-router-dom"
import './footer.css'

export default function Footer() {
  return (
    <div id='Footer-contain'>

                <div className='Footer-links '>
                    <a>estudiojuridicocontablevyp@gmail.com</a>
                    <a>+54 011 - 2252 - 3564</a>
                    <a> Argentina</a>
                    <div className="redes-sociales-footer">
                        <a><i className='fa fa-facebook'></i></a>
                        <a><i className='fa fa-instagram'></i></a>
                        <a> <i className='fa fa-linkedin'></i></a>
                        <a><i className='fa fa-twitter'></i></a>
                        <a> <i className='fa fa-whatsapp'></i></a>
                    </div>
                </div>

                <div className='Footer-links'>
                    <h4>Links</h4>
                    <a>Inicio</a>
                    <a>Servicios</a>
                    <a>Sobre Nosotros</a>
                    <a>Honorarios</a>
                    <a>Contacto</a>
                </div>

                <div className='Footer-links'>
                    <h4>Contacto</h4>
                    <div className='footerPhone'>
                        <img src={Phone} />011 - 2252 - 3564
                    </div>

                    <div className='footerEmail'>
                        <img src={Mail} />estudiojuridicocontablevyp@gmail.com
                    </div>

                    <div className='footerLocation'>
                        <img src={Location} />Belgrano, Buenos Aires, Argentina
                    </div>

                </div>

            </div>
  )
}
