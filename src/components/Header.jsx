import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {
    return (
        <div>
            {/*  ! Header Section */}
            <header className="bg-black py-4 lg:py-8 text-gray-600">
                {/* ! Header Container  */}
                <div className="container flex items-center justify-between space-x-8 lg:space-x-20">
                    {/* Logo */}
                    <a href='.' className='pl-6 md:pl-8'>
                        <img src={require('images/ktm-logo.png')} alt="logo" width={150} />
                    </a>
                    {/* Mobile Menu */}
                    <div className="block sm:hidden pr-6">
                        <GiHamburgerMenu className='cursor-pointer text-white'/>  
                    </div>
                    {/* NavMenu */}
                    <div className="hidden sm:flex justify-between flex-1">
                        {/* Left Menu */}
                        <nav class="flex items-center text-sm lg:text-xl gap-6">
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Movies</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Product</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Price</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Blog</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">News</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">About</a>
                            <a href="." className="text-white hover:text-orange-600 transition duration-200 ">Contact</a>
                        </nav>
                        {/* Right Menu */}
                        <div className="flex items-center space-x-4 lg:space-x-8  uppercase text-sm lg:text-base whitespace-nowrap">
                            <a href="." className="text-white bg-orange-600 px-3 py-1 hover:bg-orange-400 rounded-sm"><i class="fa-solid fa-right-to-bracket text-sm"></i> Logın</a>
                            <a href="." className="text-white bg-orange-600 px-3 py-1 hover:bg-orange-400 rounded-sm"><i class="fa-solid fa-user-plus text-sm"></i> Sıng up</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header