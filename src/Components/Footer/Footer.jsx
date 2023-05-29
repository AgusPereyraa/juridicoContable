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
                <H4 className='footerTitle' text='Contacto' />
                <div className='footerPhone'>
                    <img src={Phone} alt='logo-phone'/>
                    <P text='011 - 2252 - 3564' />
                </div>

                <div className='footerEmail'>
                    <img src={Mail} alt='logo-mail'/>
                    <P text='estudiojuridicocontablevyp
                        @gmail.com' />
                </div>

                <div className='footerLocation'>
                    <img src={Location} alt='logo-location' />
                    <P text='Belgrano, Buenos Aires, Argentina' />
                </div>

            </div>

        </div>
    )
}
