import React from 'react'
import Navbar from '../navbar/Navbar'
import hi from '../../assets/hi.png'
import CV from './Resume.pdf'
import img from '../../assets/trophime.jpg'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
       
        <Navbar /> 
        <section 
        data-aos='fade-up'
        data-aos-delay='250'
        id='home'
        className='text-white body-font z-10 mt-20'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center text-center relative'>
                    {/* <img src={hi} data-aos='fade-up' data-aos-delay='400'
                     className='absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform
                    -translate-x-1/2 -translate-y-1/2 w-20 h-20'/> */}
                <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>Hi! I'm Trophime KARASISI</h1>
                {/* <p className='mb-8 leading-relaxed text-xl'>
                Enthusiastic and detail-oriented IT Support Specialist and Developer with 4 years of 
                experience in helping users solve technical issues and creating efficient, 
                user-friendly solutions. Skilled at identifying and resolving hardware and software problems,
                 managing networks, improving user productivity, and developing custom applications to meet organizational needs. 
                 Proficient in programming, database management, and system integration. Strong communication and problem-solving
                skills ensure seamless collaboration with users 
                and teams to maintain and enhance IT systems and deliver impactful solutions.    
                </p> */}
                <p className='mb-8 leading-relaxed text-xl'>
                Highly skilled and solutions-oriented Full Stack Developer with hands-on experience designing, developing, and maintaining dynamic web and mobile applications. 
                Adept at working across the entire technology stack—from crafting intuitive, responsive frontends with React.js, TypeScript, Tailwind CSS, to building robust, secure backends using Node.js, Express.js, Prisma, 
                and relational or NoSQL databases like PostgreSQL, MySQL, and MongoDB.
                 As a Full Stack Developer, I bring deep understanding of both frontend user experience and backend architecture, ensuring seamless interaction, optimized performance, 
                 and long-term maintainability. Passionate about writing clean, efficient code, improving systems, and delivering impactful digital experiences that solve real-world problems.    
                </p>
                <div className='flex justify-center'>
                    <a href={CV} download> 
                        <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg'>
                            Download CV
                        </button>
                    </a>
                </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                   <img src={img} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
                </div>
            </div>
        </section>
    </div>
  )
}
