import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';
import { Footer } from '../footer/Footer';

interface AboutProps {
  viewAbout: () => void;
}

const About = ( {viewAbout }: AboutProps ) => {
  return (
    <div className='flex justify-between text-white py-16 px-4'>
      <div className='py-10 px-24 flex flex-col items-center'>
        <h1 className='font-semibold text-5xl text-center mb-5'>We want to Teach Stock Trading & Investing to Everyone</h1>
        <p className='px-20 text-center mb-5'>Do you find stock market trading and investing ‘difficult’? We are here to simplify it. With our experienced mentors and practical approach, we aim to make you more proficient in taking better trades and investment decisions.</p>
        <div className=''>
        <motion.button 
                onClick={viewAbout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="relative z-10">More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
        </div>
      </div>
      <div className='w-3/4 bg-transparent border border-white mr-10 rounded-2xl'>
          image
      </div>
    </div>
  )
}

export default About