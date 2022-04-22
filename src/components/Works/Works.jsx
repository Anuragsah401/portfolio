import React from 'react'
import HeadTitle from '../UI-Elements/HeadTitle/HeadTitle'
import img1 from '../../assets/images/gallary.PNG'
import img2 from '../../assets/images/Capture.PNG'

import Card from './Card/Card'


const Works = () => {

    const detail = [
        {
            img: img1,
            title: 'Gallary App',
            link: '#'
        },
        {
            img: img2,
            title: 'Blog App',
            link: 'https://github.com/Anuragsah401/About-Us-Page'
        },
        {
            img: img1,
            title: 'Gallary App',
            link: '#'
        },
        {
            img: img1,
            title: 'Gallary App',
            link: '#'
        },
        {
            img: img1,
            title: 'Gallary App',
            link: '#'
        },
        {
            img: img1,
            title: 'Gallary App',
            link: '#'
        },
    ]

    return (
        <div id='work' className="bg-[#eee] py-[5rem]">
            <div className='max-w-[1200px] m-auto'>
                <div className="">
                    <HeadTitle title="My Portfolio" subTitle='Some Development Works' center='center' />
                </div>
                <div className="mt-[3rem] flex flex-col gap-[2rem]">
                    <div className="flex justify-center gap-[2rem]">
                        {detail.slice(0, 3).map((item, index) =>
                            <Card item={item} key={index} />
                        )}
                    </div>

                    <div className="flex justify-center gap-[2rem]">
                        {detail.slice(3, 6).map((item, index) =>
                            <Card item={item} key={index} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
