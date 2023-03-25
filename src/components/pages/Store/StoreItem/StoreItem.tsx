import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Item from './models/Item';
import data from '../../../public/images/kiki.jpeg';
import styles from './StoreItem.module.scss';
import { useShoppingCart } from '../../../../context/shoppingCartContext';

interface StoreItemProps {
    id:number;
    name: string;
    price: number; 
    imgUrl: string;
    hqimgUrl?: string;
}

const StoreItem: FC<StoreItemProps> = ({ id,name,price,imgUrl,hqimgUrl }:StoreItemProps) => {

    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <div className={styles.StoreItem}>
            <div className={styles.StoreItem__link}>
                <NavLink to={`/store/${ id }`}>
                    <img src={imgUrl} alt={name} />
                </NavLink>
            </div>
            <div className={styles.StoreItem__content}>
                <p>{ name } ${ price }</p>
            </div>
            {/* <div>
                {quantity === 0 ? (
                    <button onClick={() => increaseCartQuantity(id)}>+ add to cart</button>
                ): 
                <div>
                    <div>
                        <button onClick={() => decreaseCartQuantity(id)}>-</button>
                        <div><span>{ quantity }</span> in cart</div>
                        <button onClick={() => increaseCartQuantity(id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(id)}>remove</button>
                </div>}
            </div> */}
        </div>
    )
}

export default StoreItem;
