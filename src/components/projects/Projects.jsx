import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image from '../../assets/uhdss-project.png'
import image2 from '../../assets/uhdss-project2.png'
import image3 from '../../assets/uhdss-project3.png'
import image4 from '../../assets/uhdss-project4.png'
import image5 from '../../assets/uhdss-project5.png'

export default function Projects() {
    const listProjects = [
        {id:1, image:image, title:'UHDSS', description:"Africa's best education agency for students who want to study abroad", link:'https://uhdss.com/'},
        {id:2, image:image5, title:'Task Management', description:'N0 1Task Management project, Monitor all your project and tasks here', link:'https://mytasks.uhdss.com/'},
        {id:3, image:image3, title:'Real Estate', description:'Your property, your control, with ViewHome. We have a wide range of properties for you to choose from.', link:'https://viewhomebase.com/'},
        {id:4, image:image2, title:'Hotels Management', description:'Experience an Exquisite Hotel Immersed in Rich History and Timeless Elegance', link:'https://www.hotels-apartment.com/'},
        {id:5, image:image4, title:'Travel and Tour', description:'Travel to your favorite city with respectful of the environment', link:'https://uhdss-hospitality.netlify.app/'},
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    };
  return (
    <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container px-5 py-24 mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <Slider {...settings}>
                {
                    listProjects.map((project)=>{
                        return(
                        <div key={project.id} className='p-4'>
                            <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
                                <div className='p-6'>
                                    <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1 cursor-pointer'><a href={project.link} target='_blank'>{project.title}</a></h2>
                                    <p className='leading-relaxed mb-3'>{project.description}</p>
                                </div>
                            </div>
                        </div>
                        )
                       
                    })
                }
            </Slider>
        </div>
    </section>
  )
}
