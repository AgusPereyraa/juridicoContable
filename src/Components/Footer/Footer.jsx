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
                <a className='linksFooter'>Inicio</a>
                <a className='linksFooter'>Servicios</a>
                <a className='linksFooter'>Sobre Nosotros</a>
                <a className='linksFooter'>Honorarios</a>
                <a className='linksFooter'>Contacto</a>
            </div>

            <div className='footerLinks'>
                <h4 className='footerTitle'>Contacto</h4>
                <div className='footerPhone'>
                    <img src={Phone} alt='logo-phone'/>
                    <p>011 - 2252 - 3564</p>
                </div>

                <div className='footerEmail'>
                    <img src={Mail} alt='logo-mail'/>
                    <p>estudiojuridicocontablevyp
                        @gmail.com
                    </p>
                </div>

                <div className='footerLocation'>
                    <img src={Location} alt='logo-location' />
                    <p>Belgrano, Buenos Aires, Argentina</p>
                </div>

            </div>

        </div>
    )
}
