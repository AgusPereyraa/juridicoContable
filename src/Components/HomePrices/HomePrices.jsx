import React from 'react'
import './homePrices.css'
import H2 from '../H2/H2'
import H3 from '../H3/H3'
import P from '../P/P'
import Span from '../Span/Span'
import Logo1 from '../../Img/Logo1.png'
import { Link as Anchor } from 'react-router-dom'

export default function HomePrices() {
    return (
        <div className='homePrices'>

            <div className='textPrices'>
                <H2 text='Honorarios' />
                <P text='Según lo establece la ley de honorarios profesionales.' />
                <Span text='Los honorarios de los abogados, procuradores y auxiliares de la justicia que por su actividad judicial o extrajudicial, administrativa en trámites de mediación actuaren como patrocinantes o como representantes, o como auxiliares de la justicia, cuando la competencia correspondiere a los tribunales con asiento en la Capital Federal y los Tribunales Federales, como así toda actividad profesional desplegada en la Ciudad de Buenos Aires, se regularán de acuerdo con esta ley. La presente ley es de orden Público.' />
            </div>

            <div className='separator'></div>

            <div className='aboutContact'>

                <div className='aboutTitle'>
                    <H3 text='Contactanos' />
                </div>

                <div className='about'>

                    <div className='aboutLeft'>
                        <P text='Si buscas una consultoría jurídica que pueda brindarte soluciones legales y fiscales efectivas y personalizadas, no dudes en contactarnos. Nuestro equipo de abogados y contadores está listo para ayudarte a cumplir con tus objetivos empresariales y mantener tu negocio en el camino del éxito.' />
                        <Anchor to='/contact'>
                            <Span text='Contactanos' />
                        </Anchor>
                    </div>

                    <div className='aboutRight'>
                        <img src={Logo1} alt="logoContact" />
                    </div>

                </div>

            </div>

        </div>
    )
}
