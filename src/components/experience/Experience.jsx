import React from 'react'
import img_experience from '../../assets/img_experience.png'

export default function Experience() {
  return (

    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
             <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src={img_experience} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 '>Experience</h1>
            <h2 className='title-font font-bold text-white sm:text-2xl '>2021-2024: IT Manager & software developer/ UHDSS</h2>
            <p className='mb-8 text-white leading-relaxed '>
              <ul className='ml-5'>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Developed and maintained web applications using JavaScript, React.js, and Node.js, ensuring responsive designs and optimized performance.</li>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Collaborated with designers and back-end teams for seamless interfaces and web service integration.</li>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Conducted code reviews and adhered to best practices.</li>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Managed ICT tasks, including configuring network devices and providing user training.</li>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Offered remote assistance and support to customers.</li>

              </ul>
            </p>
            <h2 className='title-font font-bold text-white sm:text-2xl '>2023 (6months): IT intern/ REB</h2>
            <p className='mb-8 text-white leading-relaxed '>
              <ul className='ml-5'>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Maintained and optimized laptops and ICT infrastructure for educational purposes.</li>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Troubleshot and repaired hardware, software, and network issues.</li>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Installed, configured, and managed desktop and laptop systems for optimal performance.</li>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Set up and maintained network equipment, ensuring functionality and security compliance.</li>
                <li className='flex items-center gap-4'><p className='h-2 w-2 rounded-full text-white border bg-white'></p>Collaborated with IT teams to implement security measures and uphold data protection policies.</li>

              </ul>
            </p>
        </div>
        </div>
    </section>

  )
}
