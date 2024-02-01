import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">Education & <span className="text-yellow-400">Skill</span></h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillsItem title="React Develope" year="2014 -2018"/>
                    <SkillsItem title="MERN stack Developer" year="2016 -2018"/>
                    <SkillsLanguage
                    skill1="html"
                    skill2="css"
                    skill3="javascript"
                    level1="w-[91%]"
                    level2="w-[80%]"
                    level3="w-[80%]"/>
                </div>
                <div>
                <SkillsItem title="Angular Develope" year="2014 -2018"/>
                    <SkillsItem title="MEAN stack Developer" year="2016 -2018"/>
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