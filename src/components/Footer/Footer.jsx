import React from 'react';

import HeadTitle from '../HeadTitle/HeadTitle';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
     <div id='footer' className='bg-[#f7f7f7] py-[8rem]'>
        <div className='max-w-[1200px] m-auto'>
           <div className='mb-[3.5rem]'>
               <HeadTitle title='Contact' subTitle='Get in Touch With Me' center='center'/>
           </div>
           <div className='flex'>
              <div className='flex-1'>
                 <form action="" className='flex flex-col gap-[1.5rem]'>
                    <input className='py-[0.5rem] px-[1rem] border-b-2 border-[#000] bg-transparent outline-none' type="text" placeholder="Subject"/>
                    <input className='py-[0.5rem] px-[1rem] border-b-2 border-[#000] bg-transparent outline-none' type="username" placeholder="Your name"/>
                    <input className='py-[0.5rem] px-[1rem] border-b-2 border-[#000] bg-transparent outline-none' type="email" placeholder="Your Email Here"/>
                    <textarea className='py-[0.5rem] px-[1rem] border-b-2 border-[#000] bg-transparent outline-none' type="textarea" placeholder="Drop Message" rows="4" cols="50"/>
                    <button className='bg-[#151931] py-[0.8rem] px-[2rem] text-[white] inline-block rounded-[5px] text-[17px] text-center hover:text-[#9ac0fa] mt-[1rem]'>Submit</button>
                 </form>
              </div>
              <div className='flex-1'>
                  <ul className='flex flex-col gap-[1rem] pl-[2rem]'>
                     <li>
                        <FontAwesomeIcon icon={faEnvelope} className='text-[1.3rem]' color='#000'/>
                        <p className='inline ml-[1rem] text-[18px]'>anuragsah401@gmail.com</p>
                     </li>
                     <li>
                        <FontAwesomeIcon icon={faWhatsapp} className='text-[1.3rem]' color='#000'/>
                        <p className='inline ml-[1rem] text-[18px]'>+977 9813950227</p>
                     </li>
                     <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className='text-[1.3rem]' color='#000'/>
                        <p className='inline ml-[1rem] text-[18px]'>Dhumbarahi-01, Kathmandu, Nepal</p>
                     </li>
                  </ul>
              </div>
           </div>
        </div>
     </div>
  )
};

export default Footer;
