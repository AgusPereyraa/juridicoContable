import React from 'react'
import Admin from '../../Img/profile-circle.svg'
import './mainTeam.css'

export default function MainTeam() {
  return (
    <div id='mainTeam'>

      <div className='teamMain'>

        <div className='teamText'>
          <h3 className='teamTitle'>Nuestro Equipo</h3>
        </div>

        <div className='teamAdmin'>

          <div className='admin'>
            <img src={Admin} alt="" />
            <h4 className='adminTitle'>Agustina Vicente</h4>
            <p className='adminDesc'>Contadora, recibida de la USAL, con experiencia en impuestos e industria fintech</p>
          </div>

          <div className='admin'>
            <img src={Admin} alt="" />
            <h4 className='adminTitle'>Sebastian Pereyra</h4>
            <p className='adminDesc'>Procurador y abogado, recibido de la UBA, con especialización en el area de Derecho Tributario.</p>
          </div>

          <div className='admin'>
            <img src={Admin} alt="" />
            <h4 className='adminTitle'>Nadia Pereyra</h4>
            <p className='adminDesc'>Abogada, recibida de la UBA, con especialización y experiencia en el area de Derecho Empresarial.</p>
          </div>

        </div>

        <p className='teamDesc'>En nuestra consultoría jurídica, nos esforzamos por brindar un servicio excepcional y una atención al cliente de primer nivel. Creemos en la importancia de la transparencia y la comunicación abierta, por lo que nos aseguramos de trabajar en estrecha colaboración con nuestros clientes para comprender sus necesidades y objetivos específicos.</p>

      </div>

    </div>
  )
}
