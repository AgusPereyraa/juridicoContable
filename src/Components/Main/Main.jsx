import React from 'react'
import NavBar from '../Navbar/Navbar'
import MainHome from '../MainHome/MainHome'
import './main.css'

export default function Main() {
    return (
      <div className='main'>
        <NavBar />
        <MainHome />
      </div>
    )
  }