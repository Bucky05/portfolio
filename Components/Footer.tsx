import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
    return (
        <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
            <div  className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2
            w-[80%] mx-auto gap-[3rem]'>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full
                    bg-[#55e6a5]'>
                        <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Address</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>Aage jake right</p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full
                    bg-[#55e6a5]'>
                        <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Mobile</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>
                            +876543456789<br/>+567890234
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full
                    bg-[#55e6a5]'>
                        <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Send Us Email</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>
                            anijodha@gmail.com<br/>
                            shwegotrips@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
                <div className='text-[16px] mb-[2rem] md:mb-0  text-white opacity-20'>
                    Webdev warriors 2023 | All Rights Reserved
                </div>
            <div className='flex items-center space-x-10'>
                <p className='text-[16px] text-white opacity-20'>Terms & Condition</p>
                <p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
                <p className='text-[16px] text-white opacity-20'>Sitemap</p>
                
            </div>
            </div>
        </div>
    )
}

export default Footer