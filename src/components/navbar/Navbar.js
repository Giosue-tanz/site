import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  const handleNav = useCallback(() => {
    if (nav) {
      setSlideOut(true);
      setTimeout(() => {
        setNav(false);
        setSlideOut(false);
      }, 500);
    } else {
      setNav(true);
    }
  }, [nav]);

  const changeBackground = useCallback(() => {
    setScroll(window.scrollY >= 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [changeBackground]);

  const getClassName = (base, condition, whenTrue, whenFalse = '') => {
    return `${base} ${condition ? whenTrue : whenFalse}`.trim();
  };

  return (
    <div name="top" className={getClassName('navbar', scroll, 'navbar-white')}>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <h1>Giosuè Aiello</h1>
          </div>
        </Link>

        <ul className={getClassName('nav-menu', nav, 'active', slideOut ? 'slide-out' : '')}>
          <li className={getClassName('nav-item', scroll, 'nav-item-white', 'nav-item-black-small')}>
            <Link to="/">HOME</Link>
          </li>
          <li className={getClassName('nav-item', scroll, 'nav-item-white', 'nav-item-black-small')}>
            <Link to="/AboutMe">WORKS</Link>
          </li>
          <li className={getClassName('nav-item', scroll, 'nav-item-white', 'nav-item-black-small')}>
            <Link to="/Works">NOTES</Link>
          </li>
          <li className={getClassName('nav-item', scroll, 'nav-item-white', 'nav-item-black-small')}>
            <Link to="/contact">CONTACTS</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

