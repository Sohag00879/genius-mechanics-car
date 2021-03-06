import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    // const{service} = props;
    const {name,description,img,price,_id} = service;
    return (
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className='px-3'>{description}</p>
           <Link to={`/booking/${_id}`}>
           <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
           </Link>
        </div>
    );
};

export default Service;






// import React from 'react';

// const Service = (props) => {
//     const{id,name,price,description,img} = props.service;
//     return (
//         <div>
//             <h2>This is service page</h2>
//             <p>Name:{name}</p>
//             <img src={img}alt="" />
//             <p>description: {description}</p>
//         </div>
//     );
// };

// export default Service;