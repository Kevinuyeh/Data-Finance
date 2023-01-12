import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500GB storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>send up to 2GB</p>
            </div>
            <button className='bg-[#00df98] w-[200px] rounded-full font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
           </div>

           <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/' />
            <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
            <p className='text-center text-4xl font-bold'>$249</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1TB storage</p>
                <p className='py-2 border-b mx-8'>2 Granted Users</p>
                <p className='py-2 border-b mx-8'>send up to 4GB</p>
            </div>
            <button className='bg-black w-[200px] rounded-full font-medium mx-auto my-6 px-6 py-3 text-[#00df98]'>Start Trial</button>
           </div>

           <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
            <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
            <p className='text-center text-4xl font-bold'>$349</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>2TB storage</p>
                <p className='py-2 border-b mx-8'>3 Granted Users</p>
                <p className='py-2 border-b mx-8'>send up to 6GB</p>
            </div>
            <button className='bg-[#00df98] w-[200px] rounded-full font-medium mx-auto my-6 px-6 py-3 text-black'>Start Trial</button>
           </div>
        </div>
    </div>
  )
}

export default Cards