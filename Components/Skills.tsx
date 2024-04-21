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
                
                <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                    <div>
                        <SkillsItem title="Angular Developer" year="2023 - Present" description = "Utilized design concepts to develop and implement intuitive web applications as an Associate Software Engineer and Associate Software Intern at Robomq, ensuring seamless functionality and bug-free performance."/>
                    </div>
                    <div>
                        <SkillsItem title="NodeJS Developer" year="2023 - Present" description = "Applied Node.js framework along with MySQL database integration to bring designs to life, crafting fluent and bug-free web applications as an Associate Software Engineer and Associate Software Intern at Robomq."/>
                    </div>
                    <div>
                        <SkillsItem title="Android Developer" year="2021 -2021" description='During my summer internship at Climbax Entertainment, I served as an Android Developer Intern, where I collaborated with the team to create application pages in alignment with customer design requirements. Additionally, I implemented an authentication system to enhance security and user experience and integrated IOT for an smart home project'/>
                    </div>
                    <div>
                        <SkillsItem title="BTech" year="2019 -2023" description="Graduated with a Bachelor's degree in Computer Science and Engineering, actively engaging in various projects that facilitated continuous learning and exploration of cutting-edge technologies. Contributed to a startup venture, fostering enduring relationships with dedicated peers, while maintaining a commendable 7.5 CGPA"/>
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
                    skill1="Angular"
                    skill2="Node"
                    skill3="java"
                    level1="w-[80%]"
                    level2="w-[75%]"
                    level3="w-[75%]"/>
                    
                </div>
                
                <div>
                <SkillsLanguage
           skill1="html"
           skill2="css"
           skill3="javascript"
           level1="w-[91%]"
           level2="w-[80%]"
           level3="w-[80%]"/> 
                </div>
            </div>
            </div>
            </Element>
            </div>
    

    )
}

export default Skills