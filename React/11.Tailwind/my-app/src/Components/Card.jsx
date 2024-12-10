import React from 'react'

const Card = () => {
  return (
      <div className='bg-white text-black w-80 h-80 m-auto p-6 rounded-lg border-black border-4 shadow-lg shadow-black'>
        <p className='bg-yellow-300 w-20 p-1 font-bold'>Learning</p>
        <p className='p-1'>Published 21 Dec 2023</p>
        <h3 className='font-bold p-1'>HTML & CSS foundations</h3>
        <p className='p-1'>These languages are backbone of every website, defining structure, content and presentation</p>
        <div>
            <span className='font-bold'>Greg Hooper</span>
        </div>
      
    </div>
  )
}

export default Card
