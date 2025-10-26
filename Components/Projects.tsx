import Image from 'next/image'
import React from 'react'
import config from '@/config/config'
const nodeProjectDemoLink = config.nodeProjectDemoLink

const Projects = () => {
    return (
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Pro<span className="text-yellow-400">Ject</span>
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                <div data-aos='fade-up' data-aos-delay='300'> 
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                      <a href='https://netflixai.anirudhrathore.com' target='_blank'>  <Image src="/images/netflix.jpg" alt="Netflix" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/></a>
                    </div>
                </div>
                <div data-aos='fade-up'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                       <a href={nodeProjectDemoLink} target='_blank'> <Image src="/images/redditss.JPG" alt="Reddit" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/></a>
                    </div>
                </div>
               
                <div data-aos='fade-up' data-aos-delay='300'> 
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                      <a href='https://www.loom.com/share/262ab078dd66435eb0f7dd4821f5fbd9' target='_blank'>  <Image src="/images/aiExpenseTracker.jpg" alt="AI Expense Tracker" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/></a>
                    </div>
                </div>
                 <div data-aos='fade-up' data-aos-delay='300'> 
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                      <a href='https://anirudhrathore.com/Anirudh/URLShortner.mp4' target='_blank'>  <Image src="/images/urlShortner.jpg" alt="URL Shortner" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/></a>
                    </div>
                </div>
                 <div data-aos='fade-up' data-aos-delay='300'> 
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                      <a href='https://github.com/Bucky05/Smart-Plantation-System' target='_blank'>  <Image src="/images/smaart.jpg" alt="Smart Plantation System" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/></a>
                    </div>
                </div>
                {/* <div data-aos='fade-up' data-aos-delay='600'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p3.jpg" alt="portfolio" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='900'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p4.jpg" alt="portfolio" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='1200'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p5.jpg" alt="portfolio" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='1500'>
                    <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relatvie w-[100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p2.jpg" alt="portfolio" fill 
  style={{ objectFit: "cover" }}  className="object-contain"/>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects