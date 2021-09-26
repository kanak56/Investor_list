import React, { createElement } from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    // distructing
    const { cart } = props;
    let total = 0;
    let displayExtraName = [];
    for (const items of cart) {
        total = total + items.amount;
        let totalExtra = ` ` + items.name + '   :   ' + items.amount;
        displayExtraName.push(totalExtra);

    }
    console.log(displayExtraName);
    // console.log(cart);


    return (
        <div>
            <hr />
            <hr />
            <h3>Selected Investors</h3> <hr />
            <hr />
            <div className='investor-summery' id='extra'>
                <h4>Investors Selected: {cart.length} </h4>
                <p>Amount Will be : {total}</p> <br />
                <p className='displayExtra'>{displayExtraName}</p>

                <hr />
            </div>
        </div>
    );
};

export default Cart;