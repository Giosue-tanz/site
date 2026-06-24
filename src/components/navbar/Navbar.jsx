import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  
  const menuRef = useRef(null);
  const touchStartX = useRef(null);
  const touchCurrentX = useRef(null);

  const handleNav = useCallback(() => {
    if (nav) {
      setSlideOut(true);
      setTimeout(() => {
        setNav(false);
        setSlideOut(false);
      }, 250); // matched to 0.25s CSS transition
    } else {
      setNav(true);
      if (menuRef.current) {
          menuRef.current.style.transition = '';
          menuRef.current.style.transform = '';
      }
    }
  }, [nav]);

  const handleNavLinkClick = useCallback(() => {
    if (nav) {
      setSlideOut(true);
      setTimeout(() => {
        setNav(false);
        setSlideOut(false);
      }, 50);
    }
  }, [nav]);

  const changeBackground = useCallback(() => {
    setScroll(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [changeBackground]);
  
  // Touch Handlers for Dragging
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    if (menuRef.current) {
        menuRef.current.style.transition = 'none'; // disable transition while dragging
    }
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    
    // Only drag to the right (to close)
    if (diff > 0 && menuRef.current) {
      menuRef.current.style.transform = `translateX(${diff}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) {
        if (menuRef.current) {
            menuRef.current.style.transition = '';
            menuRef.current.style.transform = '';
        }
        return;
    }
    
    const diff = touchCurrentX.current - touchStartX.current;
    
    if (diff > 50) {
      // Chiudi il menu fluidamente dal punto corrente
      if (menuRef.current) {
        menuRef.current.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
        menuRef.current.style.transform = 'translateX(100%)';
      }
      handleNav();
    } else {
      // Torna indietro (snap back to open) fluidamente
      if (menuRef.current) {
        menuRef.current.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
        menuRef.current.style.transform = 'translateX(0)';
      }
      setTimeout(() => {
        if (menuRef.current) {
          menuRef.current.style.transition = '';
          menuRef.current.style.transform = '';
        }
      }, 250);
    }
    
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  const getClassName = (base, condition, whenTrue, whenFalse = '') => {
    return `${base} ${condition ? whenTrue : whenFalse}`.trim();
  };

  const navbarClass = `navbar${scroll && !nav ? ' navbar-white' : ''}`;

  return (
    <div name="top" className={navbarClass}>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <h1>Giosuè Aiello</h1>
          </div>
        </Link>

        {nav && <div className="menu-overlay" onClick={handleNav}></div>}

        <ul 
            className={getClassName('nav-menu', nav, 'active', slideOut ? 'slide-out' : '')}
            ref={menuRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
          <li className={getClassName('nav-item', scroll, 'nav-item-white', 'nav-item-black-small')}>
            <Link to="/" onClick={handleNavLinkClick}>HOME</Link>
          </li>
          <li className={getClassName('nav-item', scroll, 'nav-item-white', 'nav-item-black-small')}>
            <Link to="/works" onClick={handleNavLinkClick}>WORKS</Link>
          </li>
          <li className={getClassName('nav-item', scroll, 'nav-item-white', 'nav-item-black-small')}>
            <Link to="/notes" onClick={handleNavLinkClick}>NOTES</Link>
          </li>
          <li className={getClassName('nav-item', scroll, 'nav-item-white', 'nav-item-black-small')}>
            <Link to="/contact" onClick={handleNavLinkClick}>CONTACTS</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <FaBars className={`icon${scroll ? ' icon-black' : ''}`} />
          ) : (
            <FaTimes className={`icon close-menu${scroll ? ' icon-black' : ''}`} />
          )}
        </div>
        {/* Mostra il bottone di chiusura (X) fuori dal menu per mobile */}
        {nav && (
          <button
            className="close-menu animated-close"
            aria-label="Close menu"
            onClick={handleNav}
          >
            <span className="close-x">
              <span></span>
              <span></span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;