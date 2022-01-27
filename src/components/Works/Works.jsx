import React from 'react'
import HeadTitle from '../HeadTitle/HeadTitle'
import img1 from '../../assets/images/gallary.PNG'
import Card from './Card/Card'


const Works = () => {

    const detail = [
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
        <div id='work' className="bg-[white] py-[8rem]">
            <div className='max-w-[1200px] m-auto'>
                <div className="">
                    <HeadTitle title="My Portfolio" subTitle='Some Development Works' center='center'/>
                </div>
                <div className="mt-[3rem] flex gap-[2rem]">
                    <div className="flex flex-col gap-[2rem] flex-1">
                        {detail.slice(0, 2).map((item, index)=> 
                            <Card item={item} key={index}/>
                        )}
                    </div>
                    <div className="flex flex-col gap-[2rem] flex-1">
                        {detail.slice(2, 4).map((item, index)=> 
                            <Card item={item} key={index}/>
                        )}
                    </div>
                    <div className="flex flex-col gap-[2rem] flex-1">
                        {detail.slice(4, 6).map((item, index)=> 
                            <Card item={item} key={index}/>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Works
