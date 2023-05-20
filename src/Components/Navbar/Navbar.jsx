import React, {useState} from 'react'
import './navbar.css'


const Navbar = ()=>{
  const [isOpen, setIsOpen] = useState(false)

return (
 
  <nav>
   <div className='navbar'>
    
    <div className={`nav_items ${isOpen && "open"}`}>
      <div className='porfile'>
      
      {/* <Image src={logoUser} alt='' /> */}

        <div className='porfile-text'>
        <p>Estudio Juridico & Contable</p>
        <p>V & P</p> {/* centrar en la barra de navegacion */}
        </div>

      </div>

        <a href="#"><span>Inicio</span></a>
        <a href="#">Servicios</a>
        <a href="#">Nosotros</a>
        <a href="#">Honorarios</a>
        <a href="#">Contacto</a>
    </div>
    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
  </div>
  
  <div className='title-nav'>
      <p>Estudio Juridico & Contable</p> 
      <p>V & P</p>
  </div>
 </nav>
)

}

export default Navbar
