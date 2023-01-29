import React from 'react'
import { AiOutlineInfoCircle,AiOutlineShareAlt,AiOutlineFire } from 'react-icons/ai';
import { BsStarFill,BsStarHalf } from 'react-icons/bs';

const Bike = () => {
    return (
        <div>
            <section className="py-24 bg-black mt-[-10px] text-white">
                <div className="container flex space-x-16">
                    {/* Left Content */}
                    <div className="basis-2/3 ">
                        {/* Titles */}
                        <div className="flex space-x-2 uppercase divide-x divide-orange-500 divide-opacity-60">
                            <h2 className='text-2xl text-orange-500'><a href=".">Latest</a></h2>
                            <h2 className='text-2xl pl-2 text-white hover:text-orange-500'><a href=".">Populer</a></h2>
                            <h2 className='text-2xl pl-2 text-white hover:text-orange-500'><a href=".">Hot</a></h2>
                        </div>
                        {/* images */}
                        <div className="flex flex-wrap flex-row gap-2 items-center mt-5">
                            {/* image-1 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/352/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                            {/* image-2 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/353/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                             {/* image-3 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/354/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                             {/* image-4 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/355/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                             {/* image-5 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/356/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                             {/* image-6 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/357/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                             {/* image-7 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/456/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                             {/* image-8 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/789/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                            {/* image-9 */}
                            <div className="group relative overflow-hidden flex basis-1/7 items-center flex-col">
                                <img src={'https://picsum.photos/id/159/500/500'} alt="." className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                                {/* Image Detail Desc Info */}
                                <div className="absolute px-6 bottom-12">
                                    <h3 className='text-4xl text-center text-white group-hover:mb-6 duration-500 '>KTM</h3>
                                    <p className='opacity-0 group-hover:opacity-100 group-hover:mb-5 duration-500'>Lorem ipsum dolor sit amet consectetur.</p>
                                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-500">
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-600 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className="basis-1/3" >
                        <h2 className='text-2xl text-white hover:text-orange-500 uppercase divide-orange-500 divide-opacity-60'>
                            <a href=".">news</a>
                        </h2>
                        <div className="flex flex-col h-full justify-between space-y-3 mt-5">
                            <div className="flex items-center group">
                                <div className="basis-1/3 h-full">
                                    <img src={'https://picsum.photos/id/151/500/500'} alt="" className='h-full w-full object-cover' />
                                </div>
                                <div className="pl-5 basis-2/3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas!</p>
                                    <div className="flex space-x-24">
                                        <p className='text-sm mt-2'>02/10/2023</p>
                                        <p className='text-sm mt-2'>admin</p>
                                    </div>
                                    <div className="flex space-x-24 ">
                                        <div className="flex ">
                                            <p className='mt-2'><BsStarFill/></p>
                                            <p className='mt-2'><BsStarFill/></p>
                                            <p className='mt-2'><BsStarFill/></p>
                                            <p className='mt-2'><BsStarFill/></p>
                                            <p className='mt-2'><BsStarHalf/></p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                    <div className="flex space-x-1 mt-2 text-sm">
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineFire/></a> 
                                        <p>1586</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center group">
                                <div className="basis-1/3 h-full">
                                    <img src={'https://picsum.photos/id/132/500/500'} alt="" className='h-full w-full object-cover' />
                                </div>
                                <div className="pl-5 basis-2/3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas!</p>
                                    <div className="flex space-x-28">
                                        <p className='text-sm mt-2'>02/10/2023</p>
                                        <p className='text-sm mt-2'>admin</p>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarHalf/></p>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                           <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center group">
                                <div className="basis-1/3 h-full">
                                    <img src={'https://picsum.photos/id/143/500/500'} alt="" className='h-full w-full object-cover' />
                                </div>
                                <div className="pl-5 basis-2/3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas!</p>
                                    <div className="flex space-x-28">
                                        <p className='text-sm mt-2'>02/10/2023</p>
                                        <p className='text-sm mt-2'>admin</p>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarHalf/></p>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                           <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center group">
                                <div className="basis-1/3 h-full">
                                    <img src={'https://picsum.photos/id/454/500/500'} alt="" className='h-full w-full object-cover' />
                                </div>
                                <div className="pl-5 basis-2/3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas!</p>
                                    <div className="flex space-x-28">
                                        <p className='text-sm mt-2'>02/10/2023</p>
                                        <p className='text-sm mt-2'>admin</p>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarHalf/></p>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                           <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center group">
                                <div className="basis-1/3 h-full">
                                    <img src={'https://picsum.photos/id/563/500/500'} alt="" className='h-full w-full object-cover' />
                                </div>
                                <div className="pl-5 basis-2/3">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptas!</p>
                                    <div className="flex space-x-28">
                                        <p className='text-sm mt-2'>02/10/2023</p>
                                        <p className='text-sm mt-2'>admin</p>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarFill/></p>
                                        <p className='mt-2'><BsStarHalf/></p>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                           <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle/></a> 
                                           <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt/></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Bike
