import React, { FC, useState, useLayoutEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './NavbarSmallScreen.module.scss';
import 'material-icons/iconfont/material-icons.css';
import { useShoppingCart } from '../../../context/shoppingCartContext';

interface NavbarSmallScreenProps {}

const NavbarSmallScreen: FC<NavbarSmallScreenProps> = () => {

    const { openCart, cartQuantity } = useShoppingCart();

    const [isPageLinksActive, setIsPageLinksActive] = useState(false);
    console.log(isPageLinksActive);

    const handleToggleClick = () => {
        setIsPageLinksActive(prevState => !prevState);
        console.log("working");
    };

    const wrapperFunction = () => {
        handleToggleClick();
        openCart();
    }

    const location = useLocation();

    let brandStyle = {};
    if (location.pathname === '/home') {
        brandStyle = { position: 'absolute', top: '20px', left: '20px' };
    } else if (location.pathname === '/store') {
        brandStyle = { position: 'absolute', top: '0px', right: '0px', margin: "0px" };
    } else if (location.pathname === '/about') {
        brandStyle = { position: 'absolute', top: '0px', right: '0px', margin: "0px" };
    }
    
    return(
        <nav className={styles.NavbarSmallScreen} style={isPageLinksActive === true ? 
            {height: "50%", zIndex:"500"} : {height: "40px"}} >
            <div className={styles.NavbarSmallScreen__brand} style={isPageLinksActive === true ? 
            {display: "none"} : brandStyle}>
                <NavLink to="/">
                    <img src="/images/ghiblilogo.png" alt="" className={styles.NavbarSmallScreen__logo}/>
                </NavLink>
            </div>
            <a href="#" className={styles.NavbarSmallScreen__toggle} onClick={handleToggleClick}>
                <span className={styles.NavbarSmallScreen__toggleBars}></span>
                <span className={styles.NavbarSmallScreen__toggleBars}></span>
                <span className={styles.NavbarSmallScreen__toggleBars}></span>
            </a>
            <div style={isPageLinksActive === true ? 
                {display: "flex", marginTop: "30px", height: "50%"} : {display: "none"}} 
                className={`${styles.NavbarSmallScreen__pageLinks}`}> {/* do not use anchor tags so that a new request to server is prevented every time we navigate*/}
                <NavLink to="/" onClick={handleToggleClick}>Home</NavLink>
                <NavLink to="/store" onClick={handleToggleClick}>Store</NavLink>
                <NavLink to="/about" onClick={handleToggleClick}>About</NavLink>
                <button onClick={wrapperFunction} className={styles.NavbarSmallScreen__shoppingCartButton}>
                    <div className="material-icons-outlined">shopping_cart</div>
                    {cartQuantity > 0 && (<span className="circle">{cartQuantity}</span>)}
                </button>
            </div>
        </nav>
    );
}

export default NavbarSmallScreen;

