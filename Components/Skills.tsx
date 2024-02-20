import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">Education & <span className="text-yellow-400">Skill</span></h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillsItem title="Angular and NodeJS" year="2023 - Present" body ="An API and data integration company behind some of the leadingedge technologies and platforms that enable enterprises to build
business processes and automate their operations using best of
breed cloud, SaaS, and on-premise applications."/>
                    <SkillsItem title="B.Tech" year="2019 -2023" body ="Poornima College of Engineering - 9.2 CGPA 
Computer Science
"/>
                    <SkillsLanguage
                    skill1="html"
                    skill2="css"
                    skill3="javascript"
                    level1="w-[91%]"
                    level2="w-[80%]"
                    level3="w-[80%]"/>
                </div>
                <div>
                <SkillsItem title="Web Developer Intern" year="09/21 - 10/21" body ="Created website using HTML, CSS and Javascript"/>
                    <SkillsItem title="CERTIFICATES" year="2019 -2022" body ="NPTEL: The Joy of Computing using Python
(01/2022 - 04/2022)
NPTEL: Programming in Java (01/2022 - 04/2022)
NPTEL: Data Base Management System
(07/2021 - 09/2021)
Microsoft Certified: Azure AI Fundamentals (08/2021)
NPTEL: Introduction to Programming in C
(09/2020 - 11/2020)
Coursera: Programming for Everybody (Getting Started
with Python) (07/2020)
Coursera: HTML, CSS, and Javascript for Web
Developers (06/2020)
Coursera: C for Everyone: Programming Fundamentals
(05/2020)"/>
                    <SkillsLanguage
                    skill1="Angular"
                    skill2="Node"
                    skill3="java"
                    level1="w-[91%]"
                    level2="w-[80%]"
                    level3="w-[80%]"/>
                </div>
            </div>
        </div>
    )
}

export default Skills