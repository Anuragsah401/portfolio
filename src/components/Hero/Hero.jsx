import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faInstagram, faTwitter, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
        <div className=''>
            <div className='max-w-[1200px] flex m-auto justify-between'>
                <div className='pt-[200px] flex-1'> 
                    <h1 className='text-[3rem] text-[#ffffff] font-[600] pt-[3rem] mb-[]'>Anurag Sah</h1>
                    <p className='text-[20px] tracking-wider text-[#fff] font-semibold leading-[1.778] mb-[1rem]'>React Developer</p>
                    <p className='text-[#d9dae7] text-[18px] '>I have been working since 2012. I am proficient in ui design, digital marketing web development.</p>
                    <a href="."><div className=' rounded-md mt-[2rem] px-[25px] py-[15px] bg-black inline-block text-white'>Download CV</div></a>
                </div>
                <div className='mt-[7rem] flex-1 '>
                    <ul className='relative float-right top-[40%] right-[5%]'>
                        <li className='mb-[1rem] border-solid border-[0.1rem] border-light-blue-500 px-[10px] py-[6px] text-center '><a href="."><FontAwesomeIcon icon={faFacebookF} size='lg' color='#6a6d8d'/></a></li>
                        <li className='mb-[1rem] border-solid border-[0.1rem] border-light-blue-500 px-[10px] py-[6px] text-center '><a href="."><FontAwesomeIcon icon={faInstagram} size='lg' color='#6a6d8d'/></a></li>
                        <li className='mb-[1rem] border-solid border-[0.1rem] border-light-blue-500 px-[10px] py-[6px] text-center '><a href="."><FontAwesomeIcon icon={faTwitter} size='lg' color='#6a6d8d'/></a></li>
                        <li className='mb-[1rem] border-solid border-[0.1rem] border-light-blue-500 px-[10px] py-[6px] text-center '><a href="."><FontAwesomeIcon icon={faLinkedin} size='lg' color='#6a6d8d'/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero
