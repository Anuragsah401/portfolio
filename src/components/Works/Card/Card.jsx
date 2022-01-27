import React from 'react'

const Card = (props) => {
    console.log(props.item.title);
    const HoverAfter = ['hover:after:bg-black-rgba hover:after:text-[#eee] hover:after:w-[100%] hover:after:h-[100%] hover:after:absolute hover:after:top-0 hover:after:left-[0] hover:after:flex hover:after:items-center hover:after:justify-center hover:after:text-[1.5rem] hover:after:font-[500] hover:after:tracking-tighter']
    const hover = ['rounded-[5px] shadow-md hover:shadow-xl hover:shadow-cyan-500/50 truncate']

    return (
        <a href={props.links}>
        <div data-content={props.item.title} className={`max-h-[100vh] w-[100%] relative cursor-pointer rounded-[5px] ${hover} hover:after:content-[attr(data-content)] hover:after:text-[#f7efef] ${HoverAfter}`}>
            <img className='w-[100%] h-[100%] object-contain' src={props.item.img} alt="" />
        </div>
        </a>
    )
}

export default Card
