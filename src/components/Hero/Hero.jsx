import React from 'react'
import Typewriter from "typewriter-effect";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
        <div className='h-[100vh]'>
            <div className='max-w-[1200px] flex m-auto justify-between'>
                <div className='pt-[200px] flex-1'>
                    <h1 className='text-[3rem] text-[#ffffff] font-[600] pt-[3rem] mb-[] '>Anurag Sah</h1>
                    <p
                        className='text-[20px] tracking-wider text-[#fff] leading-[1.778] mb-[1rem]'>
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Web Designer", "UI/UX Designer", "Freelancer"], 
                                loop: true,
                                autoStart: true,
                                delay: 40,
                            }}
                            />
                    </p>
                    <p className='text-[#d9dae7] text-[18px] '>I have been working since 2012. I am
                        proficient in ui design, digital marketing web development.</p>
                    <a href=".">
                        <div
                            className=' rounded-md mt-[2rem] px-[25px] py-[15px] bg-black inline-block text-white'>Download CV</div>
                    </a>
                </div>
                <div className='mt-[7rem] flex-1 '>
                    <ul className='relative float-right top-[40%] right-[5%]'>
                        <a href=".">
                            <li
                                className='mb-[1rem] border border-[#6a6d8d]  rounded hover:rounded-[50%] hover:border-red-500 px-[11px] py-[7px] text-center '><FontAwesomeIcon className='' icon={faFacebookF} size='md' color='#6a6d8d'/></li>
                        </a>
                        <a href=".">
                            <li
                                className='mb-[1rem] border border-[#6a6d8d] rounded hover:rounded-[50%] hover:border-red-500  px-[11px] py-[7px] text-center '><FontAwesomeIcon icon={faInstagram} size='md' color='#6a6d8d'/></li>
                        </a>
                        <a href=".">
                            <li
                                className='mb-[1rem] border border-[#6a6d8d] rounded hover:rounded-[50%] hover:border-red-500  px-[11px] py-[7px] text-center '><FontAwesomeIcon icon={faTwitter} size='md' color='#6a6d8d'/></li>
                        </a>
                        <a href=".">
                            <li
                                className='mb-[1rem] border border-[#6a6d8d] rounded hover:rounded-[50%] hover:border-red-500  px-[11px] py-[7px] text-center '><FontAwesomeIcon icon={faLinkedin} size='md' color='#6a6d8d'/></li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero
