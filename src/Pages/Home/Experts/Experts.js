import React from 'react';

import mechanic1 from '../../../Images/Services/aaron-huber-KxeFuXta4SE-unsplash.jpg'
import mechanic2 from '../../../Images/Services/chad-kirchoff-xe-e69j6-Ds-unsplash.jpg'
import mechanic3 from '../../../Images/Services/erik-mclean-ZRns2R5azu0-unsplash.jpg'
import mechanic4 from '../../../Images/Services/laurel-and-michael-evans-c-KDq7nxVdQ-unsplash.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img:mechanic1,
        name: 'Andrew Smith',
        expertize: 'Engine Experts'
    },
    {
        img:mechanic2,
        name: 'Andrew Smith',
        expertize: 'Engine Experts'
    },
    {
        img:mechanic3,
        name: 'Andrew Smith',
        expertize: 'Engine Experts'
    },
    {
        img:mechanic4,
        name: 'Andrew Smith',
        expertize: 'Engine Experts'
    }
];

const Experts = () => {
    return (
        <div className='container' id='experts'>
            <h2 className='text-primary'>Our Experts</h2>
        <div className="row">
            {
                experts.map(expert => <Expert
                key={expert.name}
                expert ={expert}
                >

                </Expert>)
            }
        </div>

            </div>
    );
};

export default Experts;