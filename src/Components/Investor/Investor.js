import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import InvestorList from '../InvestorList/InvestorList';
import './Investor.css';

const Investor = () => {
    const [investors, setInvestors] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setInvestors(data));
    }, []);

    const hadleAddToCart = (investor) => {
        const newCart = [...cart, investor];
        setCart(newCart);

    }

    return (
        <div className='investor-container'>
            <div className="investor-list-container">
                {
                    investors.map(investor => <InvestorList
                        key={investor.id}
                        investor={investor}
                        hadleAddToCart={hadleAddToCart}></InvestorList>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Investor;