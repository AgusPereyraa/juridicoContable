import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './homeContact.css'
import H2 from '../H2/H2'
import P from '../P/P'
import LogoOne from '../../Img/Logo One.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeContact() {

  useEffect(() => {
    AOS.init({
        duration: 800
    });
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tmggftq', 'template_pccebwj', form.current, '4pRat-Hd2RpTin-Nr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div className='homeContact'>

      <div className='textContact' data-aos='fade-down' data-aos-delay='200'>
        <H2 text='Contáctanos' />
        <P text='No dudes en contactarnos. Somos el asesor que necesita tu PYME, creemos que juntos es mejor y que el trabajo en comunidad da sus frutos. La primera consulta es sin cargo. ' />
      </div>

      <div className='formContact'>

        <div className='form' data-aos='fade-down' data-aos-delay='400'>

          <form ref={form} onSubmit={sendEmail} className='input'>
            <input type="text" name={"user_name"} className='inputForm' placeholder='Nombre' required/>
            <input type="email" name={"user_email"} className='inputForm' placeholder='Email' required/>
            <textarea name={"message"} className='inputFormArea' placeholder='Deje su mensaje.' required/>
            <input type="submit" value="Enviar" className='buttonForm'/>
          </form>

        </div>

        <div className='allenar' data-aos='fade-down' data-aos-delay='600'>
          <img src={LogoOne} alt="" />
        </div>

      </div>

    </div>
  )
}
