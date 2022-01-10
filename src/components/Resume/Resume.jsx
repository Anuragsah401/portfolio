import React from 'react'
import {faUikit} from '@fortawesome/free-brands-svg-icons';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

import HeadTitle from '../HeadTitle/HeadTitle'
import Card from './Card/Card';

const Resume = () => {

    const detail = [
        {
            logo: faUikit,
            title: 'UX / UI Designer',
            subTitle: 'Apple Inc (2017 - 2020)',
            brief: 'Contrary the on way yollis pellentesque pellentesque feugiat risus met.'
        }, {
            logo: faUikit,
            title: 'UX / UI Designer',
            subTitle: 'Apple Inc (2017 - 2020)',
            brief: 'Contrary the on way yollis pellentesque pellentesque feugiat risus met.'
        }, {
            logo: faUikit,
            title: 'UX / UI Designer',
            subTitle: 'Apple Inc (2017 - 2020)',
            brief: 'Contrary the on way yollis pellentesque pellentesque feugiat risus met.'
        }, {
            logo: faCoffee,
            title: 'UX / UI Designer',
            subTitle: 'Apple Inc (2017 - 2020)',
            brief: 'Contrary the on way yollis pellentesque pellentesque feugiat risus met.'
        }, {
            logo: faCoffee,
            title: 'UX / UI Designer',
            subTitle: 'Apple Inc (2017 - 2020)',
            brief: 'Contrary the on way yollis pellentesque pellentesque feugiat risus met.'
        }, {
            logo: faCoffee,
            title: 'UX / UI Designer',
            subTitle: 'Apple Inc (2017 - 2020)',
            brief: 'Contrary the on way yollis pellentesque pellentesque feugiat risus met.'
        }
    ]

    return (
        <div className=' bg-[#f7f7f7] py-[8rem]'>
            <div className='max-w-[1200px] m-auto'>
                <div className='mb-[3.5rem]'>
                    <HeadTitle title="My Resume" subTitle='Education & Experience' center='center'/>
                </div>
                <div className='flex'>
                    <div className='relative px-[7.5px] before:content-[""] before:absolute before:w-[3.5px] before:left-[2rem] before:h-[100%] before:bg-[#d9dae7] before:rounded-[35%]'>
                        <div
                            className='pl-[70px] mr-[30]'>
                            {detail
                                .slice(0, 3)
                                .map((item, index) => {
                                    return <Card item={item} key={index}/>
                                })}
                        </div>
                    </div>

                    <div className='relative px-[7.5px] before:content-[""] before:absolute before:w-[3.5px] before:left-[2rem] before:h-[100%] before:bg-[#d9dae7] before:rounded-[35%]'>
                        <div
                            className='pl-[70px] mr-[30]'>
                            {detail
                                .slice(3, 6)
                                .map((item, index) => {
                                    return <Card item={item} key={index}/>
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
