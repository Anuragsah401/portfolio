import React from 'react'
import { Switch } from '@headlessui/react'

import { faHome, faAddressCard, faLaptopCode, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import NavLinks from './NavLinks/NavLinks';


const Navbar = () => {

    const [enabled, setEnabled] = React.useState(false)

    const items = [
        {
            name: 'Home',
            icon: faHome,
            to: 'hero'
        },
        {
            name: 'About',
            icon: faAddressCard,
            to: 'about'
        },
        {
            name: 'Resume',
            icon: faFile,
            to: 'resume'
        },
        {
            name: 'Work',
            icon: faLaptopCode,
            to: 'work'
        },
        {
            name: 'Contact',
            icon: faEnvelope,
            to: 'footer'
        }
    ]
    return (
        <div data-aos="fade-right" data-aos-delay="150" className='max-w-[200px] backdrop-filter-[50px] backdrop-blur-[3px] backdrop-brightness-90 min-h-[100vh] text-center bg-[#15193100] fixed flex flex-col justify-center'>
            <div className=' flex-1'>
                <div className='bg-[#234042] px-7 py-3'>
                    <h1 className='font-semibold text-6xl text-[#AEFEFF]'>A</h1>
                </div>
            </div>

            <div className='flex-1'>
                <ul>
                    {items.map((item, i) => <NavLinks item={item} key={i} />)}
                    <li className='px-[20px] py-[20px]'>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-teal-900' : 'bg-[#eee]'}
                                        relative inline-flex flex-shrink-0 h-[20px] w-[34px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-3.5' : 'translate-x-0'}
                                                pointer-events-none inline-block h-[16px] w-[16px] rounded-full ${enabled ? 'bg-[#000]' : 'bg-[#072227]'} shadow-lg transform ring-0 transition ease-in-out duration-200`}
                            />
                        </Switch>
                    </li>
                </ul>
            </div>



            <div className='text-[#e2e1f1] text-center flex-1'>
                <p className='-rotate-90'>@Anurag</p>
            </div>

        </div>
    )
}

export default Navbar 
