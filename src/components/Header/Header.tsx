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
      <header className="header">
        <div className="dummy-icon" />
        <img
          className="header-mobile-logo"
          src={process.env.PUBLIC_URL + '/img/logo-with-name.png'}
          alt="logo"
        />
        <img
          className="header-desktop-logo"
          src={process.env.PUBLIC_URL + '/img/logo-with-name-vertical.png'}
          alt="logo"
        />
        <div className="header-title">
          <p>Reseach Professional</p>
          <h1>Platform</h1>
        </div>
        <div className="header-icon-btns">
          {isNavOpen
            ? <CloseIcon className="close-nav-btn" onClick={closeNav} />
            : <MenuIcon onClick={openNav} />
          }
        </div>
        <div className="header-nav">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Insights</a>
          <a href="/">Events</a>
          <a href="/">Contact Us</a>
        </div>
      </header>

      <div className={`nav-drawer ${!isNavOpen ? 'drawer-closed' : ''}`}>
        <p>Site Links</p>
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Insights</a>
        <a href="/">Events</a>
        <a href="/">Contact Us</a>
      </div>
      <div className={`nav-overlay ${!isNavOpen ? 'hide-overlay' : ''}`}></div>
    </>
  )
}

export default Header;