import React from 'react'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Index from '../Index/Index'
import './main.css'

export default function Main() {
    return (
      <div className='main'>
        <NavBar className='navBar'/>
        <Index className='index'/>
        <Footer className='footer'/>
      </div>
    )
  }