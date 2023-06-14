import React from 'react'
import Phone from '../../Img/phone.svg'
import Mail from '../../Img/mail-opened.svg'
import Location from '../../Img/pin-alt.svg'
import { Link as Anchor } from "react-router-dom"
import H4 from '../H4/H4'
import './footer.css'

export default function Footer() {
    return (
        <div id='Footer-contain'>
            <div className='footerLinks'>
                <H4 text='Links' />
                <Anchor to={'/'}>Inicio</Anchor>
                <Anchor to={'/services'}>Servicios</Anchor>
                <Anchor to={'/about'}>Sobre Nosotros</Anchor>
                <Anchor to={'/contact'}>Contacto</Anchor>
                <Anchor to={'/prices'}>Honorarios</Anchor>
            </div>

            <div className='footerLinks1'>
                <H4 text='Contacto' />
                <div className='footerPhone'>
                    <img src={Phone} alt='logo-phone' />
                    <Anchor to={'tel:01133128390'}>011 - 2252 - 3564</Anchor>
                </div>

                <div className='footerEmail'>
                    <img src={Mail} alt='logo-mail' />
                    <Anchor to="mailto:estudiojuridicocontablevyp@gmail.com">estudiojuridicocontablevyp@
                    gmail.com</Anchor>
                </div>

                <div className='footerLocation'>
                    <img src={Location} alt='logo-location' />
                    <Anchor>Belgrano, Buenos Aires, Argentina</Anchor>
                </div>

            </div>

        </div>
    )
}

