import React from 'react'

const SkillsCard = (props) => {

    return (
        <div className='mb-[40px]'>
            <div className='font-[500] text-[18px] uppercase'>
                <h3>{props.item.text}</h3>
            </div>
            <div className="mt-[1rem] h-[5px] bg-[#c7c6c6] rounded-[1rem] w-[100%]">
                <div className={`bg-[#1c203b] h-[100%] rounded-[1rem]`} style={{width: `${props.item.lvl}%`}}>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard
