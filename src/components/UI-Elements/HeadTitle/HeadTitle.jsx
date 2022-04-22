import React from 'react'

const HeadTitle = (props) => {
    return (
        <div>
            <h1 className={`text-[3rem] font-[600] leading-[1.25] text-${props.center}`} style={{ color: props.titleColor || '#B6C4B9' }}>{props.title}</h1>
            <h2 className={`text-[2rem] text-[${props.subColor || '#000'}] leading-[1.25] text-${props.center}`}>{props.subTitle}</h2>
        </div>
    )
}

export default HeadTitle
