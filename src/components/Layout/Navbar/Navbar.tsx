
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import NavbarLargeScreen from '../NavbarLargeScreen/NavbarLargeScreen';
import NavbarSmallScreen from '../NavbarSmallScreen/NavbarSmallScreen';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 650 ? (
        <div>
          <NavbarSmallScreen/>
        </div>
      ) : (
        <div>
          <NavbarLargeScreen/>
        </div>
      )}
    </>
  );
};

export default Navbar;


