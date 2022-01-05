import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'

const Main = () => {
    return (
        <div className="flex ">
            <div className="flex-0">
                <Navbar/>
            </div>

            <div className='flex-1 ml-[6rem]'>
                <Hero/>
            </div>
        </div>
    )
}

export default Main
