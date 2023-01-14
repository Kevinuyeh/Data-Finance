import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-[80vh] mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#0492c2] font-bold p-4'>GROW WITH DATA ANALYTICS</p>
          <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
          <div className='flex justify-center'>
            <p className='md:text-3xl sm:text-4xl text-xl font-bold py-3'>Fast, flexible financing for</p>
            <Typed
            className='md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 py-3'
            strings={['BTB', 'BTC', 'SASS']} 
            typeSpeed={120}
            backSpeed={140}
            loop
            />
          </div>
          <p className='p-2 md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
          <button className='bg-[#0492c2] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>    
    </div>
  )
}

export default Hero