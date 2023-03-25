import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import 'material-icons/iconfont/material-icons.css';
import { useShoppingCart } from '../../../context/shoppingCartContext';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {

    const { openCart, cartQuantity } = useShoppingCart();
    
    return(
        <nav className={`${styles.Navbar}`}>
            <div className={styles.Navbar__brand}>
                <NavLink to="/">
                    <img src="/images/ghiblilogo.png" alt="" className={styles.Navbar__brandimg}/>
                </NavLink>
            </div>
            <div className={styles.Navbar__links}> {/* do not use anchor tags so that a new request to server is prevented every time we navigate*/}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <button onClick={openCart}>
                <div className="material-icons-outlined">shopping_cart</div>
                {cartQuantity > 0 && (<span className="circle">{cartQuantity}</span>)}
            </button>
            {/* <button className="material-icons-outlined">shopping_cart</button> */}
        </nav>
    );
}

export default Navbar;
