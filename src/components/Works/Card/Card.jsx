import React from 'react'

import { Link } from 'react-router-dom'

const Card = (props) => {
    const HoverAfter = ['hover:after:bg-black-rgba hover:after:text-[#eee] hover:after:w-[100%] hover:after:h-[100%] hover:after:absolute hover:after:top-0 hover:after:left-[0] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:text-[1.5rem] hover:after:font-[500] hover:after:tracking-tighter']
    const hover = ['rounded-[5px] shadow-md hover:shadow-xl hover:shadow-cyan-500/50 truncate']

    return (
        <div className="flex-initial">
            <a href={props.item.link}>
                <div data-content={props.item.title} className={`h-[100%] w-[100%] relative cursor-pointer rounded-[8px] ${hover} hover:after:content-[attr(data-content)] hover:after:text-[#f7efef] ${HoverAfter} transition-all ease delay-10`}>
                    <img className='h-[350px] w-[500px] object-cover overflow-hidden' src={props.item.img} alt="" />
                </div>
            </a>
        </div>

    )
}

export default Card
