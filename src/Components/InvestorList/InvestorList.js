import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHandshake } from '@fortawesome/free-solid-svg-icons'
import './InvestorList.css';


const InvestorList = (props) => {
    // console.log(props);
    // distructuring
    const { name, img, email, phone, amount, nationality, website } = props.investor;
    return (
        <div className='investorlist'>
            <div className='investor'>
                <hr />
                <img src={img} alt="" srcSet="" />
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Nationality:{nationality}</p>
                <p>Website: {website}</p>
                <h4>Amount: {amount}</h4>
                <button onClick={() => props.hadleAddToCart(props.investor)} className='select-btn'> <FontAwesomeIcon className='font-icon' icon={faHandshake} /> Select</button>
                <hr />
            </div>
        </div>
    );
};

export default InvestorList;