import React from 'react'
import Logo from 'images/ktm-logo.png';
import { AiOutlineFacebook,AiOutlineTwitter,AiOutlineInstagram,AiOutlineYoutube } from 'react-icons/ai';




const Footer = () => {
  return (
    <div>
         <section className="py-24 bg-black mt-[-10px] text-white">
            <div className="border-b border-gray-400 border-opacity-20 mb-5"></div>
            <div className="container">
                {/* <div className="text-2xl text-white hover:text-orange-500 uppercase cursor-pointer pl-10 lg:pl-0">Populer Blog</div> */}
                <div className="grid grid-cols-12 mt-3">
                    <div className="col-span-12 px-8 lg:pl-0 lg:col-span-3">
                        <img src={Logo} width={150} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus in ullam dolorem earum laudantium?</p>
                    </div>
                    <div className="col-span-12 px-8 lg:pl-0 lg:col-span-3 mt-3 lg:mt-0">
                        <h3 className='text-xl text-white hover:text-orange-600 duration-500 uppercase font-montserrat border-b border-orange-600 mt-1'>Menu</h3>
                        <div className='grid grid-cols-4 gap-2 mt-5'>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Movies</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Product</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Price</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Blog</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">News</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">About</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Contact</a>
                        </div>
                    </div>
                    <div className="col-span-12 px-8 lg:pl-0 lg:col-span-3 mt-3 lg:mt-0">
                        <h3 className='text-xl text-white hover:text-orange-600 duration-500 uppercase font-montserrat border-b border-orange-600 mt-1'>Follow Us</h3>
                        <div className='grid grid-cols-2 gap-2 mt-5'>
                            <a href='.'className='text-white hover:text-orange-600 transition duration-200'><AiOutlineFacebook/>Facebook;</a>
                            <a href='.'className='text-white hover:text-orange-600 transition duration-200'><AiOutlineTwitter/> Twitter</a>
                            <a href='.'className='text-white hover:text-orange-600 transition duration-200'><AiOutlineInstagram/> İnstagram</a>
                            <a href='.'className='text-white hover:text-orange-600 transition duration-200'><AiOutlineYoutube/> Youtube</a>
                        </div>
                        
                    </div>
                    <div className="col-span-12 px-8 lg:pl-0 lg:col-span-3 mt-3 lg:mt-0">
                    <h3 className='text-xl text-white hover:text-orange-600 duration-500 uppercase font-montserrat border-b border-orange-600 mt-1'>Contact</h3>
                        <div className="grid grid-col-1 mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis ipsum fugiat. Voluptatem nesciunt doloremque quam.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default Footer