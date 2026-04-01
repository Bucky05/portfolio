import Image from 'next/image'
import React from 'react'
import config from '@/config/config'
import { projectsData } from '@/data/projectsData'

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">Ject</span>
      </h1>

      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectsData.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <a href={project.link} target="_blank">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects