import React from 'react';
import './Home.css'
import Product from './Product';
//src='https://purepng.com/public/uploads/large/amazon-logo-s3f.png'
//https://www.telesurenglish.net/mrf4u/statics/i/ps/www.telesurtv.net/__export/1584731358366/sites/telesur/img/2020/03/20/amazon_2.jpg?width=1200&enable=upscale

const Home = () => {
  return <div className='home' >
      <div className='home__container' >
        <img className='home__image' src='https://purepng.com/public/uploads/large/amazon-logo-s3f.png' />

        <div className='home__row' >
          <Product/>
          <Product/>
          <Product/>
          <Product/>

        </div>

      <div className='home__row' >

      </div>

      <div className='home__row' >
        
      </div>

      </div>
  </div>;
};

export default Home;
