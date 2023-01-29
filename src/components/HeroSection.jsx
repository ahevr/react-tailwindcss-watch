import React from 'react'
import Slider from "react-slick";
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
const HeroSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div className='overflow-hidden'>
        <Slider {...settings}>
            <section className='h-64 lg:h-128 group relative before:bg-gradient-to-r before:from-gray-900 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full '>
                {/* Slider Image */}
                <img src={require('images/ktm-slider-1.jpeg')} className='w-full h-full object-cover' alt="logo" />
                {/* <img src={'https://picsum.photos/id/351/1700/600'} alt="logo" className='w-full h-full object-cover'/> */}
                {/* Hero Content */}
                <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
                    <div className="container pl-5 md:pl-3 lg:pl-0">
                        <h3 className='text-yellow-500 tracking-tighter group-hover:mb-1 duration-200'>
                            Offroad,Bike,Action
                        </h3>
                        <h1 className='font-montserrat text-2xl lg:text-8xl tracking-tight text-white group-hover:mb-1 duration-200'>
                            Ktm Exc 550 
                        </h1>
                        <p className='text-white group-hover:mb-1 duration-200 text-sm lg:text-base w-3/4 lg:w-2/3'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aperiam! turi expedita.
                        </p>
                        <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-5 lg:group-hover:mb-20 duration-1000">
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Watch Trailer
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <BsFillPlayFill/>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Full Review
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <AiOutlineInfoCircle/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-64 lg:h-128 group relative before:bg-gradient-to-r before:from-gray-900 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full '>
                {/* Slider Image */}
                <img src={require('images/ktm-slider-2.jpeg')} className='w-full h-full object-cover' alt="logo" />
                {/* <img src={'https://picsum.photos/id/351/1700/600'} alt="logo" className='w-full h-full object-cover'/> */}
                {/* Hero Content */}
                <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
                    <div className="container pl-5 md:pl-3 lg:pl-0">
                        <h3 className='text-yellow-500 tracking-tighter group-hover:mb-1 duration-500'>
                            Action,Drama,Movies
                        </h3>
                        <h1 className='font-montserrat text-2xl lg:text-8xl tracking-tight text-white group-hover:mb-1 duration-500'>
                            The Batman Begin
                        </h1>
                        <p className='text-white group-hover:mb-1 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aperiam! turi expedita.
                        </p>
                        <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-5 lg:group-hover:mb-20 duration-1000">
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Watch Trailer
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <BsFillPlayFill/>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Full Review
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <AiOutlineInfoCircle/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-64 lg:h-128 group relative before:bg-gradient-to-r before:from-gray-900 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full '>
                {/* Slider Image */}
                <img src={require('images/ktm-slider-3.jpeg')} className='w-full h-full object-cover' alt="logo" />
                {/* <img src={'https://picsum.photos/id/351/1700/600'} alt="logo" className='w-full h-full object-cover'/> */}
                {/* Hero Content */}
                <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
                    <div className="container pl-5 md:pl-3 lg:pl-0">
                        <h3 className='text-yellow-500 tracking-tighter group-hover:mb-1 duration-500'>
                            Action,Drama,Movies
                        </h3>
                        <h1 className='font-montserrat text-2xl lg:text-8xl tracking-tight text-white group-hover:mb-1 duration-500'>
                            The Batman Begin
                        </h1>
                        <p className='text-white group-hover:mb-1 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aperiam! turi expedita.
                        </p>
                        <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-5 lg:group-hover:mb-20 duration-1000">
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Watch Trailer
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <BsFillPlayFill/>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Full Review
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <AiOutlineInfoCircle/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-64 lg:h-128 group relative before:bg-gradient-to-r before:from-gray-900 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full '>
                {/* Slider Image */}
                <img src={require('images/ktm-slider-4.jpeg')} className='w-full h-full object-cover' alt="logo" />
                {/* <img src={'https://picsum.photos/id/351/1700/600'} alt="logo" className='w-full h-full object-cover'/> */}
                {/* Hero Content */}
                <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
                    <div className="container pl-5 md:pl-3 lg:pl-0">
                        <h3 className='text-yellow-500 tracking-tighter group-hover:mb-1 duration-500'>
                            Action,Drama,Movies
                        </h3>
                        <h1 className='font-montserrat text-2xl lg:text-8xl tracking-tight text-white group-hover:mb-1 duration-500'>
                            The Batman Begin
                        </h1>
                        <p className='text-white group-hover:mb-1 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aperiam! turi expedita.
                        </p>
                        <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-5 lg:group-hover:mb-20 duration-1000">
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Watch Trailer
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <BsFillPlayFill/>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Full Review
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <AiOutlineInfoCircle/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-64 lg:h-128 group relative before:bg-gradient-to-r before:from-gray-900 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full'>
                {/* Slider Image */}
                <img src={require('images/ktm-slider-5.jpeg')} className='w-full h-full object-cover' alt="logo" />
                {/* <img src={'https://picsum.photos/id/351/1700/600'} alt="logo" className='w-full h-full object-cover'/> */}
                {/* Hero Content */}
                <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
                    <div className="container pl-5 md:pl-3 lg:pl-0">
                        <h3 className='text-yellow-500 tracking-tighter group-hover:mb-1 duration-500'>
                            Action,Drama,Movies
                        </h3>
                        <h1 className='font-montserrat text-2xl lg:text-8xl tracking-tight text-white group-hover:mb-1 duration-500'>
                            The Batman Begin
                        </h1>
                        <p className='text-white group-hover:mb-1 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aperiam! turi expedita.
                        </p>
                        <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-5 lg:group-hover:mb-20 duration-1000">
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Watch Trailer
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <BsFillPlayFill/>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center cursor-pointer">
                                <a href="." className='text-white uppercase text-sm lg:text-lg hover:text-orange-600 duration-700'>
                                    Full Review
                                </a>
                                <div className="flex items-center justify-center h-4 w-4 lg:h-8 lg:w-8 bg-orange-500 rounded-full">
                                    <AiOutlineInfoCircle/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Slider>
      </div>
  )
}

export default HeroSection
