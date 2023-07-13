import React from 'react'
import SubNavbar from '../components/SubNavbar'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar'


export default function SellScreen() {
  return (
    <div>
        <SubNavbar/>
        <div className="container">
        <HeroSection/>
        <Sidebar/>
        </div>
      
    </div>
  )
}
