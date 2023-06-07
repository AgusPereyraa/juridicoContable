import React from 'react'
import './homeAbout.css'
import H2 from '../H2/H2'
import H3 from '../H3/H3'
import H4 from '../H4/H4'
import P from '../P/P'
import Span from '../Span/Span'
import Admin from '../../Img/profile-circle.svg'
import Logo1 from '../../Img/Logo1.png'
import { Link as Anchor } from 'react-router-dom'

export default function HomeAbout() {
  return (
    <div className='homeAbout'>

        <div className='aboutWelcome'>
          <H2 text='Sobre Nosotros' />

          <div className='descriptionAbout'>
            <P text='En  Estudio Jurídico Contable VYP, somos un equipo de profesionales apasionados por nuestro trabajo y comprometidos con nuestros clientes. Nos destacamos por nuestra juventud y dinamismo, lo que nos permite estar en constante actualización y crecimiento, con el objetivo de brindar el mejor asesoramiento y servicio posible. Nos adaptamos a los cambios y desafíos que presenta el mundo de los negocios y las regulaciones impositivas y laborales, para asegurarnos de que nuestros clientes obtengan los mejores resultados. La relación cercana y personalizada con cada uno de ellos es nuestra prioridad, y nos enorgullece ser reconocidos por nuestro profesionalismo y excelencia en el trato con el cliente' />
          </div>

        </div>

        <div className='aboutUs'>

          <div className='aboutUsText'>
            <H2 text='Profesionales' />
            <P text='En nuestro estudio jurídico contable, entendemos que las personas y la sociedad están en constante cambio y evolución. Por eso, nos comprometemos a mantenernos actualizados y en constante aprendizaje para ofrecer soluciones adaptadas a las necesidades de nuestros clientes. Creemos en la importancia de estar a la vanguardia en cuanto a las regulaciones impositivas y laborales, y en brindar un servicio profesional y de calidad, siempre enfocado en las necesidades de nuestros clientes.'/>
          </div>

        </div>

        <div className='teamAdmin'>

          <div className='admin'>
            <img src={Admin} alt="" />
            <H4 className='adminTitle' text='Agustina Vicente' />
            <P className='adminDesc' text='Contadora, recibida de la USAL, con experiencia en impuestos e industria fintech' />
          </div>

          <div className='admin'>
            <img src={Admin} alt="" />
            <H4 className='adminTitle' text='Sebastian Pereyra' />
            <P className='adminDesc' text='Procurador y abogado, recibido de la UBA, con especialización en el area de Derecho Tributario.' />
          </div>

          <div className='admin'>
            <img src={Admin} alt="" />
            <H4 className='adminTitle' text='Nadia Pereyra' />
            <P className='adminDesc' text='Abogada, recibida de la UBA, con especialización y experiencia en el area de Derecho Empresarial.' />
          </div>

        </div>

        <div className='aboutContact'>

          <div className='aboutTitle'>
            <H3 text='Contactanos' />
          </div>

          <div className='about'>

            <div className='aboutLeft'>
              <P text='Si buscas una consultoría jurídica que pueda brindarte soluciones legales y fiscales efectivas y personalizadas, no dudes en contactarnos. Nuestro equipo de abogados y contadores está listo para ayudarte a cumplir con tus objetivos empresariales y mantener tu negocio en el camino del éxito.' />
              <Anchor to='/contact'>
                  <Span text='Contactanos'/>
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
