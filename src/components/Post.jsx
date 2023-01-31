import React from 'react'
import { AiOutlineInfoCircle, AiOutlineShareAlt, AiOutlineFire } from 'react-icons/ai';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Post = () => {
    return (
        <div>
            <section className="py-24 bg-black mt-[-10px] text-white">
                <div className="container">
                    <div className="text-2xl text-white hover:text-orange-500 uppercase cursor-pointer pl-10 lg:pl-0">Populer Blog</div>
                    {/* Satırlar */}
                    <div className="grid grid-cols-12 lg:gap-10 mt-3">
                        {/* üst satır 12/6 toplam 2 col */}
                        <div className="col-span-12 pl-10 lg:pl-10 lg:col-span-6 lg:border border-orange-500 p-5 rounded-3xl">
                            <div className="flex items-center justify-between">
                                <h1 className='text-4xl border-b border-orange-400'>Title Lorem ipsum dolor sit amet. </h1>
                                <img src={'https://picsum.photos/id/555/50/50'} alt="" className='rounded-full' />
                            </div>
                            <div className="mt-2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus rerum ipsam fugit vitae unde sequi repudiandae eligendi adipisci, vero, corrupti quidem, qui omnis laboriosam excepturi aperiam amet quos maxime. Magni, modi explicabo nemo in quo exercitationem laborum totam, pariatur sapiente delectus aut, nulla ea accusantium eveniet. Earum molestias cum suscipit facere sequi maiores, culpa, accusamus deserunt quos fugiat perspiciatis.</p>
                            </div>
                            <div className='border-t border-orange-300 border-opacity-20 mt-2'>
                                <div className="mt-2">
                                    <div className="flex space-x-4 ">
                                        <p className='text-sm'>02/10/2023</p>
                                        <p className='text-sm'>admin</p>
                                        <div className="flex space-x-1 items-center justify-center">
                                            <p className='text-sm'>
                                                <AiOutlineFire />
                                            </p>
                                            <p className='text-sm'>125</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle /></a>
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt /></a>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarHalf /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 pl-10 lg:pl-10 lg:col-span-6 lg:border border-orange-500 p-5 rounded-3xl">
                            <div className="flex items-center justify-between">
                                <h1 className='text-4xl border-b border-orange-400'>Title Lorem ipsum dolor sit amet. </h1>
                                <img src={'https://picsum.photos/id/555/50/50'} alt="" className='rounded-full' />
                            </div>
                            <div className="mt-2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus rerum ipsam fugit vitae unde sequi repudiandae eligendi adipisci, vero, corrupti quidem, qui omnis laboriosam excepturi aperiam amet quos maxime. Magni, modi explicabo nemo in quo exercitationem laborum totam, pariatur sapiente delectus aut, nulla ea accusantium eveniet. Earum molestias cum suscipit facere sequi maiores, culpa, accusamus deserunt quos fugiat perspiciatis.</p>
                            </div>
                            <div className='border-t border-orange-300 border-opacity-20 mt-2'>
                                <div className="mt-2">
                                    <div className="flex space-x-4 ">
                                        <p className='text-sm'>02/10/2023</p>
                                        <p className='text-sm'>admin</p>
                                        <div className="flex space-x-1 items-center justify-center">
                                            <p className='text-sm'>
                                                <AiOutlineFire />
                                            </p>
                                            <p className='text-sm'>125</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle /></a>
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt /></a>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarHalf /></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* alt satır 12/4 toplam 3 col */}
                    <div className="grid grid-cols-12 lg:gap-10 mt-10">
                        <div className="col-span-12 lg:col-span-4 pl-10 lg:border border-orange-500 p-5 rounded-3xl">
                            <div className="flex items-center justify-between">
                                <h1 className='text-4xl border-b border-orange-400'>Title Lorem ipsum dolor sit amet. </h1>
                                <img src={'https://picsum.photos/id/555/50/50'} alt="" className='rounded-full' />
                            </div>
                            <div className="mt-2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus rerum ipsam fugit vitae unde sequi repudiandae eligendi adipisci, vero, corrupti quidem, qui omnis laboriosam excepturi aperiam amet quos maxime. Magni, modi explicabo nemo in quo exercitationem laborum totam, pariatur sapiente delectus aut, nulla ea accusantium eveniet. Earum molestias cum suscipit facere sequi maiores, culpa, accusamus deserunt quos fugiat perspiciatis.</p>
                            </div>
                            <div className='border-t border-orange-300 border-opacity-20 mt-2'>
                                <div className="mt-2">
                                    <div className="flex space-x-4 ">
                                        <p className='text-sm'>02/10/2023</p>
                                        <p className='text-sm'>admin</p>
                                        <div className="flex space-x-1 items-center justify-center">
                                            <p className='text-sm'>
                                                <AiOutlineFire />
                                            </p>
                                            <p className='text-sm'>125</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle /></a>
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt /></a>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarHalf /></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-12 lg:col-span-4 pl-10 lg:border border-orange-500 p-5 rounded-3xl">
                            <div className="flex items-center justify-between">
                                <h1 className='text-4xl border-b border-orange-400'>Title Lorem ipsum dolor sit amet. </h1>
                                <img src={'https://picsum.photos/id/555/50/50'} alt="" className='rounded-full' />
                            </div>
                            <div className="mt-2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus rerum ipsam fugit vitae unde sequi repudiandae eligendi adipisci, vero, corrupti quidem, qui omnis laboriosam excepturi aperiam amet quos maxime. Magni, modi explicabo nemo in quo exercitationem laborum totam, pariatur sapiente delectus aut, nulla ea accusantium eveniet. Earum molestias cum suscipit facere sequi maiores, culpa, accusamus deserunt quos fugiat perspiciatis.</p>
                            </div>
                            <div className='border-t border-orange-300 border-opacity-20 mt-2'>
                                <div className="mt-2">
                                    <div className="flex space-x-4 ">
                                        <p className='text-sm'>02/10/2023</p>
                                        <p className='text-sm'>admin</p>
                                        <div className="flex space-x-1 items-center justify-center">
                                            <p className='text-sm'>
                                                <AiOutlineFire />
                                            </p>
                                            <p className='text-sm'>125</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle /></a>
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt /></a>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarHalf /></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-12 lg:col-span-4 pl-10 lg:border border-orange-500 p-5 rounded-3xl">
                            <div className="flex items-center justify-between">
                                <h1 className='text-4xl border-b border-orange-400'>Title Lorem ipsum dolor sit amet. </h1>
                                <img src={'https://picsum.photos/id/555/50/50'} alt="" className='rounded-full' />
                            </div>
                            <div className="mt-2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus rerum ipsam fugit vitae unde sequi repudiandae eligendi adipisci, vero, corrupti quidem, qui omnis laboriosam excepturi aperiam amet quos maxime. Magni, modi explicabo nemo in quo exercitationem laborum totam, pariatur sapiente delectus aut, nulla ea accusantium eveniet. Earum molestias cum suscipit facere sequi maiores, culpa, accusamus deserunt quos fugiat perspiciatis.</p>
                            </div>
                            <div className='border-t border-orange-300 border-opacity-20 mt-2'>
                                <div className="mt-2">
                                    <div className="flex space-x-4 ">
                                        <p className='text-sm'>02/10/2023</p>
                                        <p className='text-sm'>admin</p>
                                        <div className="flex space-x-1 items-center justify-center">
                                            <p className='text-sm'>
                                                <AiOutlineFire />
                                            </p>
                                            <p className='text-sm'>125</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 mt-2">
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineInfoCircle /></a>
                                        <a href="." className='text-white hover:text-orange-500 text-lg duration-200'><AiOutlineShareAlt /></a>
                                    </div>
                                    <div className="flex">
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarFill /></p>
                                        <p className='mt-2'><BsStarHalf /></p>
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

export default Post