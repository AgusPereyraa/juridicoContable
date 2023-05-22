import React from 'react'
import Phone from '../../Img/phone.svg'
import Mail from '../../Img/mail-opened.svg'
import Location from '../../Img/pin-alt.svg'
// import { Link as Anchor, } from "react-router-dom"
import './footer.css'

export default function Footer() {
    return (
        <div id='Footer-contain'>
            <div className='footerLinks'>
                <h4 className='footerTitle'>Links</h4>
                <a>Inicio</a>
                <a>Servicios</a>
                <a>Sobre Nosotros</a>
                <a>Honorarios</a>
                <a>Contacto</a>
            </div>

            <div className='footerLinks'>
                <h4 className='footerTitle'>Contacto</h4>
                <div className='footerPhone'>
                    <img src={Phone} alt='logo-phone'/>011 - 2252 - 3564
                </div>

                <div className='footerEmail'>
                    <img src={Mail} alt='logo-mail'/>estudiojuridicocontablevyp@gmail.com
                </div>

                <div className='footerLocation'>
                    <img src={Location} alt='logo-location' />Belgrano, Buenos Aires, Argentina
                </div>

            </div>

        </div>
    )
}
