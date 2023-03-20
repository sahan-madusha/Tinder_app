import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import logo from '../image/tinderLogo.png'

{/* *rfce - make a stucture of main */}

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='Header_icon' />
      </IconButton>
      <img src={logo} alt="tinder logo" className='header_logo' />
      <IconButton>
        <ForumIcon fontSize='large' className='Header_icon' />
      </IconButton>
    </div>
  )
}

export default Header


