import React, { FC, useState, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarLargeScreen.module.scss';
import 'material-icons/iconfont/material-icons.css';
import { useShoppingCart } from '../../../context/shoppingCartContext';

interface NavbarLargeScreenProps {}

const NavbarLargeScreen: FC<NavbarLargeScreenProps> = () => {

    const { openCart, cartQuantity } = useShoppingCart();
    
    return(
        <nav className={styles.NavbarLargeScreen}>
            <div className={styles.NavbarLargeScreen__brand}>
                <NavLink to="/">
                    <img src="/images/ghiblilogo.png" alt="" className={styles.NavbarLargeScreen__logo}/>
                </NavLink>
            </div>
            <div className={`${styles.NavbarLargeScreen__pageLinks}`}> {/* do not use anchor tags so that a new request to server is prevented every time we navigate*/}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/about">About</NavLink>
                <button onClick={openCart} className={styles.NavbarLargeScreen__shoppingCartButton}>
                    <div className="material-icons-outlined">shopping_cart</div>
                    {cartQuantity > 0 && (<span className="circle">{cartQuantity}</span>)}
                </button>
            </div>
        </nav>
    );
}

export default NavbarLargeScreen;
