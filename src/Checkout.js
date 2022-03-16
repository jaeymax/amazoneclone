import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return <div className='checkout' >
      <div className='checkout__left' >
        <img className='checkout__ad' src={'https://www.kindpng.com/picc/m/216-2168761_vector-google-ads-logo-hd-png-download.png'} />
        <div>
            <h2 className='checkout__title' >Your shopping Basket</h2>
            {/* Basket Item */}
            {/* Basket Item */}
            {/* Basket Item */}

        </div>
      </div>
      <div className='checkout__right' >
        <h2>The subtotal will go here</h2>
      </div>
  </div>;
};

export default Checkout;
