import React from 'react'
import dTributario from '../../Img/bank.svg'
import dLaboral from '../../Img/user.svg'
import dFamiliar from '../../Img/home.svg'
import dCivil from '../../Img/journal.svg'
import './mainInfo.css'

export default function MainInfo() {
  return (
    <div id='main'>

      <div className='mainInfo'>

        <div className='infoText'>
          <h3 className='infoTitle'>¿Necesitas asesoramiento legal para tu empresa o negocio?</h3>
          <p className='descTitle'>Nuestro equipo de abogados expertos en derecho empresarial y civil está listo para ayudarte con cualquier problema legal que puedas tener, desde la redacción de contratos hasta la representación en procesos judiciales. Además, nuestro enfoque centrado en el cliente significa que te brindamos la atención y el apoyo que necesitas en cada paso del camino.</p>
        </div>

        <div className='infoDesc'>

          <div className='descInfo-1'>

            <div className='desc'>
              <div className='title'>
                <img src={dCivil} alt=""/>
                <h4>Derecho Civil</h4>
              </div>
              <p>Accidentes de transito. Contratos y alquileres, desalojos. Prescripción adquisitiva corta y larga. Daños y Perjuicios. Amparos.</p>
            </div>

            <div className='desc'>
              <div className='title'>
                <img src={dLaboral} alt="" />
                <h4>Derecho Laboral</h4>
              </div>
              <p>No cometas errores, nosotros te asesoramos inscribiendo a tu empleado como corresponde. Accidentes de Riesgo de Trabajo. Despidos.</p>
            </div>

          </div>

          <div className='descInfo-2'>

          <div className='desc'>
              <div className='title'>
                <img src={dTributario} alt="" />
                <h4>Derecho Tributario</h4>
              </div>
              <p>Presentaciones administrativas ante los entes recaudadores. Te asesoramos para evitar que llegues a embargos.</p>
            </div>

            <div className='desc'>
              <div className='title'>
                <img src={dFamiliar} alt="" />
                <h4>Derecho de Familia</h4>
              </div>
              <p>Divorcios, con acuerdo y sin acuerdo. Regimén de comunicación, alimentos, convenios reguladores, permisos de viajes y sucesiones.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
