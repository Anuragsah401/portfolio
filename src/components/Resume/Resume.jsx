import React from 'react'
import { faUikit } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import HeadTitle from '../HeadTitle/HeadTitle'
import Card from './Card/Card';
import Skills from './Skills/Skills';
import CV from '../../assets/Files/AnuragCV.pdf';


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
        <div id='resume' className=' bg-[#f7f7f7] py-[8rem]'>
            <div className='max-w-[1200px] m-auto'>
                <div className='mb-[3.5rem]'>
                    <HeadTitle title="My Resume" subTitle='Education & Experience' center='center' />
                </div>
                <div className='flex'>
                    <div className='relative px-[7.5px]'>
                        <div className=' before:content-[""] before:absolute before:w-[3.5px] before:left-[2rem] before:h-[96%] before:bg-[#d9dae7] before:rounded-[35%]'>
                            <div
                                className='pl-[70px] mr-[30]'>
                                {detail
                                    .slice(0, 3)
                                    .map((item, index) => {
                                        return <Card item={item} key={index} />
                                    })}
                            </div>
                        </div>
                    </div>

                    <div className='relative px-[7.5px]'>
                        <div className='before:content-[""] before:absolute before:w-[3px] before:left-[2rem] before:h-[96%] before:bg-[#d9dae7] before:rounded-[35%]'>
                            <div
                                className='pl-[70px] mr-[30]'>
                                {detail
                                    .slice(3, 6)
                                    .map((item, index) => {
                                        return <Card item={item} key={index} />
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[4.5rem]'>
                    <Skills />
                </div>
                <div className='text-center mt-[2rem]'>
                    <a href={CV} download>
                        <div className='bg-[#4FBDBA] text-[#000000] py-[1rem] px-[1.5rem] text-[1.2rem] font-[500] inline-flex items-center rounded-[5px]'>
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span>Download CV</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resume
