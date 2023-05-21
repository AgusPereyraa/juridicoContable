import React from 'react'
import NavBar from '../Navbar/Navbar'
import MainHome from '../MainHome/MainHome'
import MainInfo from '../MainInfo/MainInfo'
import MainTeam from '../MainTeam/MainTeam'
import './main.css'

export default function Main() {
    return (
      <div className='main'>
        <NavBar />
        <MainHome />
        <MainInfo />
        <MainTeam />
      </div>
    )
  }