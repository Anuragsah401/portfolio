import React from 'react'

const HeadTitle = (props) => {
    return (
        <div>
            <h1 className={`text-[3rem] text-[#b6c4b9] font-[600] leading-[1.25] text-${props.center}`}>{props.title}</h1>
            <h2 className={`text-[2rem] text-[#000] leading-[1.25] text-${props.center}`}>{props.subTitle}</h2>
        </div>
    )
}

export default HeadTitle
