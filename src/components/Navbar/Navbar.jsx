import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faBriefcase, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='max-w-[200px] backdrop-filter-[50px] backdrop-blur-[5px] backdrop-brightness-90 min-h-[100vh] text-center bg-[#15193100] fixed flex flex-col justify-center'>
            <div className=' flex-1'>
                <div className='bg-[#5a67b1] px-7 py-3'>
                <h1 className='font-semibold text-6xl text-[#e2e1f1]'>A</h1>
                </div>
            </div>
            <div className=' flex-1'>
                <ul>
                    <li className='px-[20px] py-[20px] '><a className='' href="."> <FontAwesomeIcon className='hover:text-[red]' icon={faHome} size='lg' color='#e2e1f1'/></a></li>
                    <li className='px-[20px] py-[20px]'><a className='' href="."> <FontAwesomeIcon className='hover:text-[red]' icon={faAddressCard} size='lg' color='#e2e1f1'/></a></li>
                    <li className='px-[20px] py-[20px]'><a className='' href="."> <FontAwesomeIcon className='hover:text-[red]' icon={faFile} size='lg' color='#e2e1f1'/></a></li>
                    <li className='px-[20px] py-[20px]'><a className='' href="."> <FontAwesomeIcon className='hover:text-[red]' icon={faBriefcase} size='lg' color='#e2e1f1'/></a></li>
                    <li className='px-[20px] py-[20px]'><a className='' href="."> <FontAwesomeIcon className='hover:text-[red]' icon={faEnvelope} size='lg' color='#e2e1f1'/></a></li>
                </ul>
            </div>
            <div className='text-[#e2e1f1] text-center flex-1'>
                <p className='-rotate-90'>@Anurag</p>
            </div>
        </div>
    )
}

export default Navbar
