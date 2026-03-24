import React from 'react'
import I1 from '../Images/photo-1615914143778-1a1a6e50c5dd.jpg'

export default function Home() {
  return (
    <div>
      <div className='flex relative'>
        <img className='w-screen h-screen ' src={I1} alt="" />
      </div>

      <div className='absolute  top-60 left-50 right-0  text-white italic'>
        <h1 className='text-9xl '>Jashan <br /><b className=''>Nishoria</b></h1>
        <h4 className='text-5xl italic '>Web Developer</h4>

        <div className='flex gap-12 mt-8 text-2xl ml-6 '>
          <button className='border-2 border-white rounded-3xl px-4 py-1 hover:bg-white hover:text-black'>Resume</button>
          <button className='border-2 border-white rounded-3xl px-4 py-1 hover:bg-white hover:text-black'>Portfolio</button>
        </div>
      </div>

      <div className=' flex absolute bottom-2 left-50 mt-100 gap-3 text-2xl  '>
        <a href=""><i className="text-white fab fa-twitter hover:text-blue-400 "></i></a>
        <a href=""><i className="text-white fab fa-whatsapp hover:text-green-700"></i></a>
        <a href=""><i className="text-white fab fa-instagram hover:text-pink-500"></i></a>
        <a href=""><i className="text-white fa-brands fa-pinterest-p hover:text-red-500"></i></a>
        <a href=""><i className="text-white fa-brands fa-github hover:text-gray-700"></i></a>
        <a href=""><i className="text-white fa-brands fa-linkedin-in hover:text-blue-700"></i></a>
        <a href=""><i className="text-white fa-brands fa-facebook-f hover:text-blue-500"></i></a>



      </div>

    </div>
  )
}
