import React from 'react'
import I2 from '../Images/wp5836988.jpg'

export default function About() {
  return (
    <div className="relative w-full h-screen">
      <img src={I2} alt="about" className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="max-w-3xl ml-50 text-white space-y-6">

          <h1 className="text-5xl font-bold">
            <span className="border-b-4 border-white">ABOUT</span>
          </h1>

          <a href="mailto:jashan85virk@gmail.com" className="">jashan85virk@gmail.com</a>

          <p className="text-lg mt-6 ">Web developer with over 2 years of experience specializing in IT Department. I can implement effective IT strategies at local and global levels.My greatest strength is my ability to adapt to new technologies and solve complex problems efficiently.Passionate web developer with experience in creating responsive and user-friendly websites.</p>

            <p className="text-lg mt-60">Karnal, Haryana - 132001 <br />State Road 55, India</p>

        </div>
      </div>
    </div>

  )
}
