import React, { FC } from 'react';
import { useShoppingCart } from '../../../context/shoppingCartContext';
import styles from './CartItem.module.scss';
import storeItems from "../../../data/items.json";

interface CartItemProps {
    id: number,
    quantity: number
}

const CartItem: FC<CartItemProps> = ({id,quantity}: CartItemProps) => {

    // const {removeFromCart} = useShoppingCart();


    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();

    const item = storeItems.find(i => i.id === id);
    if (item == null) return null;

    return(
        <div className={styles.CartItem}>
            <div className={styles.CartItem__image}>
                <img src={item.imgUrl}/>
            </div>
            <div className={styles.CartItem__content}>
                <div>
                    <p>{item.name}</p>
                    <button onClick={() => decreaseCartQuantity(id)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseCartQuantity(id)}>+</button>
                    <p>${item.price * quantity}</p>
                </div>
            </div>
            <div className={styles.CartItem__remove}>
                <div>            
                    <button onClick={() => removeFromCart(item.id)}>x</button>
                </div>
            </div>
        </div>
    );
}


export default CartItem;
