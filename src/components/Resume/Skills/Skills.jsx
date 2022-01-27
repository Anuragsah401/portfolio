import React from 'react'
import SkillsCard from './SkillsCard/SkillsCard'


const Skills = () => {

    const detail = [
        {
            text: 'Html',
            lvl: 80
        },
        {
            text: 'Css',
            lvl: 80
        },
        {
            text: 'JavaScript',
            lvl: 60
        },
        {
            text: 'React Js',
            lvl: 100
        },
        {
            text: 'Tailwind Css',
            lvl: 70
        },
        {
            text: 'UI/UX',
            lvl: 50
        },
        
    ]
    return (
        <div className="flex justify-between gap-[3rem]">
            <div className='flex-1 px-[7.5px]'>
                {
                    detail.slice(0, 3).map((item, index)=> <SkillsCard item={item} key={index}/>)
                }
            </div>
            <div className='flex-1 px-[7.5px]'>
                 {
                    detail.slice(3, 6).map((item, index)=> <SkillsCard item={item} key={index}/>)
                }
            </div>
        </div>
    )
}

export default Skills
