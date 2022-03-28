import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/Services/404-erro.webp'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} style={{width:'100%'}} alt="" />
            <Link to='/'> <br />
            <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;