import React from 'react'

import Typewriter from "typewriter-effect";
import "aos/dist/aos.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CV from '../../assets/Files/AnuragCV.pdf';


const Hero = () => {
    const [colorChange1, setColorChange1] = React.useState(false)
    const [colorChange2, setColorChange2] = React.useState(false)
    const [colorChange3, setColorChange3] = React.useState(false)
    const [colorChange4, setColorChange4] = React.useState(false)

    // React.useEffect(() => {
    //     Aos.init({
    //         duration: 3000
    //     })
    // })

    return (
        <div id='hero' className='h-[100vh]'>
            <div className='max-w-[1200px] h-[100%] flex mx-auto justify-center items-center'>
                <div className='flex-1'>
                    <h1 data-aos="fade" data-aos-delay="100" className='text-[3.2rem] text-[#ffffff] font-[600] '>Anurag Sah</h1>
                    <div
                        className='text-[20px] tracking-wider text-[#fff] leading-[1.778] mb-[1rem]'>
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Web Designer", "UI/UX Designer", "Freelancer"],
                                loop: true,
                                autoStart: true,
                                delay: 30,
                                deleteSpeed: 30
                            }}
                        />
                    </div>
                    <p className='text-[#d9dae7] text-[18px] '>I have been working since 2012. I am
                        proficient in ui design, digital marketing web development.</p>
                    <a href={CV} download>
                        <div
                            className='rounded-md mt-[2rem] px-[25px] py-[15px] bg-[#4FBDBA] inline-block text-[#000000] font-medium text-[1] hover:bg-[#000000] hover:text-[#eee] transition-all ease-in-out delay-50'>Download CV</div>
                    </a>
                </div>
                <div data-aos="fade-left" data-aos-delay="150" className='flex-1 flex justify-end'>
                    <ul>
                        <a href=".">
                            <li onMouseOver={() => setColorChange1(true)} onMouseOut={() => setColorChange1(false)}
                                className='mb-[1rem] border border-[#6a6d8d] rounded hover:rounded-[50%] hover:border-[#4FBDBA] px-[11px] py-[7px] text-center transition-all ease delay-10'><FontAwesomeIcon className={`${colorChange1 ? 'text-[#4FBDBA]' : 'text-[#6a6d8d]'} transition-all ease delay-10`} icon={faFacebookF} size='1x' /></li>
                        </a>
                        <a href=".">
                            <li onMouseOver={() => setColorChange2(true)} onMouseOut={() => setColorChange2(false)}
                                className='mb-[1rem] border border-[#6a6d8d] rounded hover:rounded-[50%] hover:border-[#4FBDBA]  px-[11px] py-[7px] text-center transition-all ease delay-10'><FontAwesomeIcon className={`${colorChange2 ? 'text-[#4FBDBA]' : 'text-[#6a6d8d]'} transition-all ease delay-10`} icon={faInstagram} size='1x' color='#6a6d8d' /></li>
                        </a>
                        <a href=".">
                            <li onMouseOver={() => setColorChange3(true)} onMouseOut={() => setColorChange3(false)}
                                className='mb-[1rem] border border-[#6a6d8d] rounded hover:rounded-[50%] hover:border-[#4FBDBA]  px-[11px] py-[7px] text-center transition-all ease delay-10'><FontAwesomeIcon className={`${colorChange3 ? 'text-[#4FBDBA]' : 'text-[#6a6d8d]'} transition-all ease delay-10`} icon={faTwitter} size='1x' color='#6a6d8d' /></li>
                        </a>
                        <a href=".">
                            <li onMouseOver={() => setColorChange4(true)} onMouseOut={() => setColorChange4(false)}
                                className='mb-[1rem] border border-[#6a6d8d] rounded hover:rounded-[50%] hover:border-[#4FBDBA]  px-[11px] py-[7px] text-center transition-all ease delay-10'><FontAwesomeIcon className={`${colorChange4 ? 'text-[#4FBDBA]' : 'text-[#6a6d8d]'} transition-all ease delay-10`} icon={faLinkedin} size='1x' color='#6a6d8d' /></li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero
