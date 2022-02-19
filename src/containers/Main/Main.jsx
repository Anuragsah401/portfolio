import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Resume from '../../components/Resume/Resume'
import HireMe from '../../components/HireMe/HireMe'
import Works from '../../components/Works/Works'
import Footer from '../../components/Footer/Footer'



const Main = () => {
    return (
        <div className="flex scroll-smooth">
            <div className="flex-0">
                <Navbar />
            </div>

            <div className='flex-1 ml-[6rem]'>
                <Hero />
                <About />
                <Resume />
                <HireMe />
                <Works />
                <Footer />
            </div>

        </div>
    )
}

export default Main
