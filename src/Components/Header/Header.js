import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <h1 className='h1'>Making an Information Technology Firm</h1>
            <h3>Welcome To Our Firm</h3>
            <small>We are trying to establish a new IT firm, There are some list of investor who are interested to invest in our new IT firm</small>
            <h2>
                Total Budeget: 10 Milion
            </h2>
        </div>
    );
};

export default Header;