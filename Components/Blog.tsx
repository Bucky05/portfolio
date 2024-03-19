import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import blog1 from '../public/images/blog1.jpg'

const Blog = () => {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
            <h1 className='heading'>
                MY 
                <span className='text-yellow-400'>BLOG</span>

            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
                <div>
                    <div className='w-[100%] relative h-[400px]'>
                        <Image src={blog1}
                                alt = 'blog'
                                layout='fill'
                                className='object-cover'
                                />
                    </div>
                    <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                        <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                            December 10,2023
                        </div>
                        <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                            <div className='flex items-center space-x-3'>
                                <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                                <p className='text-white'>By Anirudh</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                                <p className='text-white'>Comments(2)</p>
                            </div>
                        </div>
                        <p className='mt-[1rem] text-white text-[18px] font-semibold'>Next JS fullstack Development</p>
                     </div>
                </div>
                <div>
                    <div className='w-[100%] relative h-[400px]'>
                        <Image src={blog1}
                                alt = 'blog'
                                layout='fill'
                                className='object-cover'
                                />
                    </div>
                    <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                        <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                            December 16,2023
                        </div>
                        <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                            <div className='flex items-center space-x-3'>
                                <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                                <p className='text-white'>By Aish</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                                <p className='text-white'>Comments(2)</p>
                            </div>
                        </div>
                        <p className='mt-[1rem] text-white text-[18px] font-semibold'>Angular Development</p>
                     </div>
                </div>
                <div>
                    <div className='w-[100%] relative h-[400px]'>
                        <Image src={blog1}
                                alt = 'blog'
                                layout='fill'
                                className='object-cover'
                                />
                    </div>
                    <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                        <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                            July 10,2023
                        </div>
                        <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                            <div className='flex items-center space-x-3'>
                                <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                                <p className='text-white'>By Jimmy</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                                <p className='text-white'>Comments(2)</p>
                            </div>
                        </div>
                        <p className='mt-[1rem] text-white text-[18px] font-semibold'>Eating </p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Blog