import React from "react";


interface Props {
    title: string;
    year: string;
    description: string;
}
const SkillsItem = ({title,year,description}:Props) => {
    return (
    <div className="items-center h-[350px]">
        <span className="py-[1rem] px-[2rem] text-[#55e6a5] pt-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">{year}</span>
        <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
            {title}
        </h1>
        <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
           {description}
        </p>
    </div>
    )
}

export default SkillsItem