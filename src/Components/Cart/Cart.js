import React, { createElement } from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    // distructing
    const { cart } = props;
    let total = 0;
    let name = [];
    let img = [];
    for (const items of cart) {
        total = total + items.amount;
        name = items.name;
        img = items.img;
    }
    console.log(cart);


    return (
        <div>
            <h3>Selected Investors</h3>
            <div className='investor-summery'>
                <h4>Investors Selected: {cart.length} </h4>
                <p>Amount Will be : {total}</p> <br />
                <div id='extra'>
                    <p>{name}</p>
                    <img src={img} alt="" srcSet="" />
                </div>
            </div>
        </div>
    );
};

export default Cart;