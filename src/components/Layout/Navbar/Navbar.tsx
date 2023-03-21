import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import 'material-icons/iconfont/material-icons.css';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    
    return(
        <nav className={`${styles.Navbar}`}>
            <h2><NavLink to="/">Shopping Cart</NavLink></h2>
            <div className="links"> {/* do not use anchor tags so that a new request to server is prevented every time we navigate*/}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <button className="material-icons-outlined">shopping_cart</button>
        </nav>
    );
}

export default Navbar;
