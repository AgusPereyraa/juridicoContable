import React from 'react'
import Phone from '../../Img/phone.svg'
import Mail from '../../Img/mail-opened.svg'
import Location from '../../Img/pin-alt.svg'
import { Link as Anchor, } from "react-router-dom"
import H4 from '../H4/H4'
import P from '../P/P'
import './footer.css'

export default function Footer() {
    return (
        <div id='Footer-contain'>
            <div className='footerLinks'>
                <H4 className='footerTitle' text='Links' />
                <Anchor to='/'><P text='Inicio' /></Anchor>
                <Anchor to='/services'><P text='Servicios' /></Anchor>
                <Anchor to='/about'><P text='Sobre Nosotros' /></Anchor>
                <Anchor to='/price'><P text='Honorarios' /></Anchor>
                <Anchor to='/contact'><P text='Contacto' /></Anchor>
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
