import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img
        className='header__icon'
        src='https://cdn.svgporn.com/logos/airbnb.svg'
        alt=''
      />

      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>

      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
