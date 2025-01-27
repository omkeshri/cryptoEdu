import React from 'react'
import WhatWeAre from './WhatWeAre'
import Mission from './Mission'
import AboutUsers from './AboutUsers'
import CustomerSay from './CustomerSay'
import { Footer } from '../footer/Footer'

const AboutPage = () => {
  return (
    <div className='bg-[#0A0F1C] min-h-screen'>
      <div className='bg-gradient-radial from-blue-500/10 via-transparent to-transparent'>
      <WhatWeAre />
      <Mission />
      <AboutUsers />
      <CustomerSay />
      <Footer/>
    </div></div>
  )
}

export default AboutPage