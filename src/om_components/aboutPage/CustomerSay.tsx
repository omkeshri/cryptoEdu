import React from 'react'
import FeedbackCards from './FeedbackCards'

const CustomerSay = () => {
  return (
    <div className='my-24'>
      <h1 className='text-center text-5xl font-semibold text-white mt-10'>Customer Say</h1>
      <div className='flex justify-around'>
        <FeedbackCards />
        <FeedbackCards />
        <FeedbackCards />
      </div>
    </div>
  )
}

export default CustomerSay