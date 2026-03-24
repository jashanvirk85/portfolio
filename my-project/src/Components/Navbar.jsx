import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className='flex bg-gray-900 justify-between items-center px-6 py-4'>

                <ul className='flex gap-4 text-white'>
                    <li><a className='hover:text-blue-400' href="">Home</a></li>
                    <li><a className='hover:text-blue-400' href="">About</a></li>
                    <li><a className='hover:text-blue-400' href="">Resume</a></li>
                    <li><a className='hover:text-blue-400' href="">Portfolio</a></li>
                </ul> 
                
                <div>
                    <a href="" className='text-white  bg-gray-800 border border-gray-700 px-4 py-2 rounded-md  focus:ring-2 focus:ring-blue-500'>+91 9273845683</a>
                </div>
            </nav>
        </div>
        
    )
}
