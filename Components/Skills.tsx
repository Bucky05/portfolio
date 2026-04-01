import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'
import { Element } from 'react-scroll';
const Skills = () => {
    return ( 
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[rgb(9,16,26)]">
            <Element name='experience' id= 'experience'>
            <div>
                <h1 className="heading">Experience & <span className="text-yellow-400">Education</span></h1>
                
                <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[2rem] gap-y-8 items-start">
  <div>
    <SkillsItem
      title="Software Engineer"
      year="Apr 2025 - Mar 2026"
      description="Leveraged various authentication mechanisms such as Single Sign-On (SSO), JSON Web Tokens (JWT), and JavaScript widgets to design and implement secure APIs. Utilized React, Go, and Node.js to build scalable and efficient web applications."
    />
  </div>

  <div>
    <SkillsItem
      title="Associate Software Engineer"
      year="Jan 2023 - Apr 2025"
      description="As a Full Stack Developer, I leveraged my expertise in Angular, Node.js, and MySQL to design and develop scalable web applications, debug complex issues, and mentor junior developers, ensuring high-quality code and efficient project delivery."
    />
  </div>

  <div  className='mb-14 md:mb-0'>
    <SkillsItem
      title="Android Developer"
      year="July 2021 - Aug 2021"
      description="During the Android Developer internship at Climbax Entertainment, I collaborated with the team to create application pages in alignment with customer design requirements. Implemented an authentication system to enhance security and user experience and integrated IoT for a smart home project."
    />
  </div>

  <div>
    <SkillsItem
      title="BTech"
      year="July 2019 - Mar 2023"
      description="Graduated with a Bachelor's degree in Computer Science and Engineering, actively engaging in various projects that facilitated continuous learning and exploration of cutting-edge technologies. Contributed to a startup venture, fostering enduring relationships with dedicated peers."
    />
  </div>
</div>

           </div>
           </Element>
            {/* Skills  */}
            <Element name='skills' id='skills'>
            <div className=" pt-[5rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading"> <span className="text-yellow-400">Skills</span></h1>
            <div className="w-[80%] mx-auto pt-[2rem] md:pt-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                <SkillsLanguage
                    skill2="Angular"
                    skill1="Node & JavaScript"
                    skill3="java"
                    level2="w-[85%]"
                    level1="w-[90%]"
                    level3="w-[75%]"/>
                    
                </div>
                
                <div>
                <SkillsLanguage
           skill1="Python"
           skill2="HTML & CSS"
           skill3="Go"
           level1="w-[70%]"
           level2="w-[80%]"
           level3="w-[65%]"/> 
                </div>
                
            </div>
            </div>
            </Element>
            </div>
    

    )
}

export default Skills