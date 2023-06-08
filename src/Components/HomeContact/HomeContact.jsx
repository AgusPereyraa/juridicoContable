import React from 'react'
import './homeContact.css'
import H2 from '../H2/H2'
import P from '../P/P'
import Logo2 from '../../Img/Logo2.png'

export default function HomeContact() {
  return (
    <div className='homeContact'>

        <div className='textContact'>
            <H2 text='Contáctanos' />
            <P text='No dudes en contactarnos. Somos el asesor que necesita tu PYME, creemos que juntos es mejor y que el trabajo en comunidad da sus frutos. La primera consulta es sin cargo. ' />
        </div>

        <div className='formContact'>

          <div className='allenar'>
            <img src={Logo2} alt="" />
          </div>

          <div className='form'>

            <div className='input'>
              <input type="text" className='inputForm' placeholder='Nombre*'/>
              <input type="text" className='inputForm' placeholder='Email*'/>
              <input type="text-area" className='inputForm' placeholder='Deje su mensaje.'/>
            </div>
              <button type="submit">Enviar</button>

          </div>
          
        </div>
        
    </div>
  )
}
