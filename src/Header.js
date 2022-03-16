import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'

const Header = () => {
  return <div className='header' >
      <Link to={'/'} >
      <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </Link>

      <div className='header__search' >
        <input className='header__searchInput' type={'text'} />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='header__option' >
            <span className='headerOptionLineOne' >Hello Guest</span>
            <span className='headerOptionLineTwo' >Sign In</span>
        </div>
        <div className='header__option' >
        <span className='headerOptionLineOne' >Returns</span>
            <span className='headerOptionLineTwo' >& Orders</span>
        </div>
        <div className='header__option' >
        <span className='headerOptionLineOne' >Your</span>
            <span className='headerOptionLineTwo' >Prime</span>
        </div>
        <div className='header__option' >
            
        </div>
       
      </div>
      <Link to='/checkout' >

      <div className='header__optionBasket' >
        <ShoppingBasketIcon/>
        <span className='header__optionLineTwo header__basketCount' >0</span>
      </div>
      </Link>
  </div>;
};

export default Header;
