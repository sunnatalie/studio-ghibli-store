import React, { FC, useState, useEffect } from 'react';
import styles from './Layout.module.scss';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import NavbarSmallScreen from './NavbarSmallScreen/NavbarSmallScreen';
import NavbarLargeScreen from './NavbarLargeScreen/NavbarLargeScreen';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {

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

    return(
        <div className={styles.Layout}>
            <>
                {windowWidth < 650 ? (
                    <NavbarSmallScreen/>
                ) : (
                    <NavbarLargeScreen/>
                )}
            </>
            <Main />
            <Footer />
        </div>
    );
}


export default Layout;
