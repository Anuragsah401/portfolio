import React from 'react'
import classnames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Card = (props) => {

    const before = ['before:content-[""] before:absolute before:w-[12px] before:-left-[50px] before:h-[12px] before:bg-[#1c203b] before:rounded-[50%] before:top-[46%]']
    const after = ['after:content-[""] after:absolute after:w-[6px] after:h-[6px] after:-left-[47px] after:bg-[#eee] after:top-[48%] after:rounded-[50%] z-2']
    return (
        <div className={(classnames(`flex p-[3rem] bg-[#ffffff] gap-[1rem] mt-[30px] rounded-[10px] relative ${before} ${after}`))} key={props.index}>
            <div>
                <FontAwesomeIcon icon={props.item.logo} size='2x' color='#1c203b'/>
            </div>
            <div>
                <h1 className='font-[500] mb-[1rem] text-[22px] text-[#120f2d]'>{props.item.title}</h1>
                <h3 className='mb-[7px] leading-1 font-[500]'>{props.item.subTitle}</h3>
                <p>{props.item.brief}</p>
            </div>
        </div>
    )
}

export default Card



