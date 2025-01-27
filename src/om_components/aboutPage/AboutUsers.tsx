import React from 'react'
import GrowDataCards from './GrowDataCards'
import { Footer } from '../footer/Footer'


const AboutUsers = () => {
  return (
    <div className='text-white mt-28'>
        <h1 className='text-center text-5xl font-semibold mb-10'>We Grow with You</h1>
        <div className='flex justify-around'>
          <GrowDataCards />
          <GrowDataCards />
          <GrowDataCards />
          <GrowDataCards />
        </div>

    </div>
  )
}

export default AboutUsers