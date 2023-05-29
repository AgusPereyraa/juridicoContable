import React, {useState} from 'react'
import { Link as Anchor } from 'react-router-dom'
import P from '../P/P'
import Span from '../Span/Span'
import './navbar.css'


const Navbar = ()=>{
  const [isOpen, setIsOpen] = useState(false)

return (
 
  <nav>
   <div className='navbar'>
    
    <div className={`nav_items ${isOpen && "open"}`}>
      <div className='porfile'>
    
        <div className='porfile-text'>
          <P text='Estudio Juridico Contable' />
          <P text='V & P' />
        </div>

      </div>

        <Anchor to='/'><P text='Inicio' /></Anchor>
        <Anchor to='/services'><P text='Servicios' /></Anchor>
        <Anchor to='/about'><P text='Nosotros' /></Anchor>
        <Anchor to='/prices'><P text='Honorarios' /></Anchor>
        <Anchor to='/contact'><P text='Contacto' /></Anchor>
    </div>

    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
      <Span />
      <Span />
      <Span />
    </div>
    
    <div className='title-nav'>
      <P text='Estudio Juridico Contable' />
      <P text='V & P' />
    </div>
  
  </div>

 </nav>
)

}

export default Navbar
