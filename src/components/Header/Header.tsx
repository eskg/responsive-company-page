import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  }

  const closeNav = () => {
    setIsNavOpen(false);
  }

  return (
    <>
      <div className="header-wrapper">
        <header className="header">
          <div className="icon-placeholder" />
          <img src={process.env.PUBLIC_URL + '/img/logo-with-name.png'} alt="logo" />
          {isNavOpen
            ? <CloseIcon className="close-nav-btn" onClick={closeNav} />
            : <MenuIcon onClick={openNav} />
          }
        </header>
        <div
          className="header-nav"
          style={{ transform: isNavOpen ? 'scaleY(1)' : 'scaleY(0)' }}
        >
          <p>Site Links</p>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Insights</a>
          <a href="/">Events</a>
          <a href="/">Contact Us</a>
        </div>
      </div>

      <div
        style={{ transform: isNavOpen ? 'scaleY(1)' : 'scaleY(0)' }}
        className="nav-overlay"
      />
    </>
  )
}

export default Header;