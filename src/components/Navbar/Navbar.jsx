import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faLaptopCode, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className='max-w-[200px] backdrop-filter-[50px] backdrop-blur-[3px] backdrop-brightness-90 min-h-[100vh] text-center bg-[#15193100] fixed flex flex-col justify-center'>
            <div className=' flex-1'>
                <div className='bg-[#1C203B] px-7 py-3'>
                <h1 className='font-semibold text-6xl text-[#ebff77]'>A</h1>
                </div>
            </div>
            <div className='flex-1'>
                <ul>
                    <li className='px-[20px] py-[20px]'><Link to="hero" spy={true} smooth={true} duration={1500}> <FontAwesomeIcon className='hover:text-[red] cursor-pointer' icon={faHome} size='lg' color='#e2e1f1'/></Link></li>
                    <li className='px-[20px] py-[20px]'><Link to="about" spy={true} smooth={true} duration={1500}> <FontAwesomeIcon className='hover:text-[red] cursor-pointer' icon={faAddressCard} size='lg' color='#e2e1f1'/></Link></li>
                    <li className='px-[20px] py-[20px]'><Link to="resume" spy={true} smooth={true} duration={1500}> <FontAwesomeIcon className='hover:text-[red] cursor-pointer' icon={faFile} size='lg' color='#e2e1f1'/></Link></li>
                    <li className='px-[20px] py-[20px]'><Link to="work" spy={true} smooth={true} duration={1500}> <FontAwesomeIcon className='hover:text-[red] cursor-pointer' icon={faLaptopCode} size='lg' color='#e2e1f1'/></Link></li>
                    <li className='px-[20px] py-[20px]'><Link to="footer" spy={true} smooth={true} duration={1500}> <FontAwesomeIcon className='hover:text-[red] cursor-pointer' icon={faEnvelope} size='lg' color='#e2e1f1'/></Link></li>
                </ul>
            </div>
            <div className='text-[#e2e1f1] text-center flex-1'>
                <p className='-rotate-90'>@Anurag</p>
            </div>
        </div>
    )
}

export default Navbar
