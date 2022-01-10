import React from 'react'
import classnames from 'classnames';

const HeadTitle = (props) => {
    return (
        <div>
            <h1 className={(classnames(`text-[3rem] text-[#b6c4b9] font-[600] leading-[1.25] text-${props.center}`))}>{props.title}</h1>
            <h2 className={(classnames(`text-[2rem] text-[#000] leading-[1.25] text-${props.center}`))}>{props.subTitle}</h2>
        </div>
    )
}

export default HeadTitle
