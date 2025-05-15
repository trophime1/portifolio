import React from 'react'
import javascript from '../../assets/javascript.png'
import typescript from '../../assets/typescript.png'
import node from '../../assets/nodejs.png'
import express from '../../assets/expressjs.png'
import react from '../../assets/react.png'
import next from '../../assets/nextjs.svg'
import tailwind from '../../assets/tailwind.png'
import prisma from '../../assets/prisma.svg'
import postgres from '../../assets/postgresql.jpg'
import mongodb from '../../assets/mongodb.png'
import socket from '../../assets/socketio.jpeg'
import jwt from '../../assets/JWT.png'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
      <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
        <div 
          data-aos='fade-up' 
          data-aos-delay='200' 
          className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
          <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white'>
            Skills
          </h1>
          <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
            Experienced Full Stack Developer with strong command over frontend and backend technologies. Skilled in building scalable web applications, real-time systems, and RESTful APIs using modern frameworks and tools. Adept at integrating authentication, database management, and real-time communication using technologies such as React.js, Node.js, Prisma, and Socket.io. Passionate about writing clean, maintainable code and delivering solutions that enhance user experience and system performance.
          </p>
        </div>

        <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
          <nav className='flex flex-wrap list-none -mb-1 justify-start'>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={javascript} alt="JavaScript" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={typescript} alt="TypeScript" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={react} alt="React.js" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={next} alt="Next.js" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={tailwind} alt="Tailwind CSS" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={node} alt="Node.js" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={express} alt="Express.js" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={prisma} alt="Prisma" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={postgres} alt="PostgreSQL" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={mongodb} alt="MongoDB" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={socket} alt="Socket.io" className='rounded-full w-24 h-24 object-cover' /></li>
            <li className='lg:w-1/3 mb-4 w-1/2'><img src={jwt} alt="JWT" className='rounded-full w-24 h-24 object-cover' /></li>
          </nav>
        </div>
      </div>
    </section>
  )
}
