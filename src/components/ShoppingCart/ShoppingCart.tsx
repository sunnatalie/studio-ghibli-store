import React, { FC } from 'react';
import { useShoppingCart } from '../../context/shoppingCartContext';
import CartItem from './CartItem/CartItem';
import styles from './ShoppingCart.module.scss';
import storeItems from "../../data/items.json";

interface ShoppingCartProps {
    isOpen?: boolean,
}

const ShoppingCart: FC<ShoppingCartProps> = ({ isOpen }: ShoppingCartProps) => {

    const { closeCart,cartItems, cartQuantity } = useShoppingCart();

    return(
        <div>
            {isOpen && (
            <div>
                <div onClick={closeCart} className={styles.ShoppingCart__overlay}></div>
                <div className={styles.ShoppingCart}>
                    <div className={styles.ShoppingCart__cartHeader}>
                        <button onClick={closeCart} className={styles.ShoppingCart__closeButton}>x</button>
                        <h2>Cart</h2>
                    </div>
                    <div className={styles.ShoppingCart__cartMain}>
                        <div className={styles.ShoppingCart__cartItems}>
                            {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />))}
                        </div>
                    </div>
                    <div className={styles.ShoppingCart__cartFooter}>
                        {cartQuantity > 0 ? (<div>
                            <span>Grand total: {" "}</span>
                            <span>${cartItems.reduce((total,cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id);
                                // return (total + ((item?.price || 0) * cartItem.quantity));
                                return Math.round(((total + ((item?.price || 0) * cartItem.quantity)) + Number.EPSILON) * 100) / 100
                            }, 0)}</span>
                        </div>): (<span className={styles.ShoppingCart__cartMain}>Please add some items to the cart and come back!</span>)}
                    </div>
                </div>
            </div>)}
        </div>

    )
}


export default ShoppingCart;
