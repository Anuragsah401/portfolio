import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Resume from '../../components/Resume/Resume'



const Main = () => {
    return (
        <div className="flex scroll-smooth">
            <div className="flex-0">
                <Navbar/>
            </div>

            <div className='flex-1 ml-[6rem]'>
                <Hero/>
                <About/>
                <Resume />
            </div>
        </div>
    )
}

export default Main
