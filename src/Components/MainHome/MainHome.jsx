import React from 'react'
import './mainHome.css'
import H2 from '../H2/H2'
import P from '../P/P'
import Span from '../Span/Span'
// import { Link as Anchor } from 'react-router-dom'

export default function MainHome() {
    return (
        <div className='home'>
            <H2 text='¿Necesitas ayuda legal o contable?'/>
            <P text='¡Podemos ayudarte!'/>
            <Span id='descHome' text='En el Estudio Jurídico Contable V & P, ofrecemos una amplia gama de servicios legales y contables para ayudarte en todo lo que necesites. Desde asesoría fiscal y contable hasta litigios civiles y comerciales. Contáctanos hoy para obtener más información sobre cómo podemos ayudarte a resolver tus problemas legales y contables.'/>
            <button className='homeButton'>Contactanos</button> {/* Anchor as Link*/}
        </div>
    )
}
