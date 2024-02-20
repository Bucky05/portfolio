import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

interface Props {
    image : string
    role:string
    name:string
}
const ClientReview = ({name,role,image}:Props) => {
    return (
        <div className="flex flex-col text-center justify-center">
            <Image src = {image}
                alt = {name}
                width={100}
                height={100}
                objectFit="contain"
                className="mx-auto mb-[2rem] rounded-full"/>

                <div className='flex items-center mx-auto'>
                    <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
                    <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
                    <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
                    <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
                    <StarIcon className='w-[2rem] h-[2rem] text-yellow-500'/>
                </div>
                <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
                <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>
                    {role}
                </p>
                <p className='text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto'>
                Very impressed with her skills and professionalism. She has a strong understanding of web developement and was able to integrate scim connectors. She was also very communicative throughout the project, keeping me updated on progress and promptly responding to my questions. She delivered the project on time and within budget, and I was very pleased with the final results. Overall.
                </p>
        </div>
    )
}
export default ClientReview