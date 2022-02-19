import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faClock, faGrin } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';


const Contribution = () => {

    const detail = [
        {
            logo: <FontAwesomeIcon icon={faCalendarAlt} size='2x' color='#072227' />,
            num: 50,
            detail: 'Working Hours'
        },
        {
            logo: <FontAwesomeIcon icon={faGlobe} size='2x' color='#072227' />,
            num: 4,
            detail: 'Total Projects'
        },
        {
            logo: <FontAwesomeIcon icon={faClock} size='2x' color='#072227' />,
            num: 2,
            detail: 'Years Journey'
        },
        {
            logo: <FontAwesomeIcon icon={faGrin} size='2x' color='#072227' />,
            num: 0,
            detail: 'Total Client'
        },

    ]


    return (
        <div className='px-[3rem]'>
            <div className='flex justify-between' >
                {detail.map((item, index) =>
                    <div className="flex" key={index}>
                        <div>
                            {item.logo}
                        </div>

                        <div className='ml-[1rem]'>
                            <h3 className='mb-[2px] leading-[1.8rem] text-[1.6rem] font-[700] text-[#1c203b]'>{item.num}</h3>
                            <p className='leading-[1.8rem] text-[1.1rem] font-[600] text-[#1c203b]'>{item.detail}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contribution