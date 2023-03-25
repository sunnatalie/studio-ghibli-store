import React, { FC } from 'react';
import styles from './ItemDetails.module.scss';
import storeItems from '../../../../../data/items.json';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Item from '../models/Item';
import StoreItem from '../StoreItem';
import { useShoppingCart } from '../../../../../context/shoppingCartContext';

interface ItemDetailsProps {
    id?: number;
    name?: string;
    price?: number; 
    imgUrl?: string;
    hqimgUrl?: string;
}

const ItemDetails: FC<ItemDetailsProps> = ({ name,price,imgUrl,hqimgUrl }:ItemDetailsProps) => {

    const { itemId } = useParams();

    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();

    let id = +itemId!;

    const quantity = getItemQuantity(id);

    return(
        <div className={styles.ItemDetails}>
            <div>
                <img src={itemId && storeItems[itemId].hqimgUrl} alt={ name } />
                <p>{itemId && storeItems[itemId].name}</p>
                <p>{itemId && storeItems[itemId].price}</p>
            </div>
            <div>
                {quantity === 0 ? (
                    <button onClick={() => increaseCartQuantity(id)}>+ add to cart</button>
                ): 
                <div>
                    <div>
                        <button onClick={() => decreaseCartQuantity(id)}>-</button>
                        <p>{ quantity } in cart</p>
                        <button onClick={() => increaseCartQuantity(id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(id)}>remove</button>
                </div>}
            </div>

        </div>
    )

    // const [item, setItem] = useState<Item>();
    // const params = useParams();
    // const thisItem = 

    //     const renderItem = () => {
    //         // if (item) {
    //             // const id = params.itemId;
    //             // // const imgSrc = `${BASE_API_URL}/products/images/${item.hqimgUrl}`;
    //             // console.log('success');


    //             }
    
    //             return (
    //                 <div className={styles.ProductDetails__product}>
    //                     {/* <div className={styles.ProductDetails__imgContainer}>
    //                         <img src={item.hqimgUrl} />
    //                     </div>
    
    //                     <div className={styles.ProductDetails__content}>
    //                         <p>{ id }</p>
    //                         <h3>Name:{item.name}</h3>
    //                         <h3>Price:{item.price}</h3>
    //                         {/* <h3>Stock:{product.stock}</h3> */}
    //                         {/* <NavLink to="/products">Back</NavLink>
    //                         <span>|</span>
    //                         <NavLink onClick={modalToggleHandler} to="#">Edit</NavLink>
    //                         <span>|</span>
    //                         <NavLink onClick={deleteProductHandler} to="#">Delete</NavLink> */}
    //                     {/* </div> */} 

    //                     {item && (
    //                         <p>{ item.name }</p>
    //                     )}
    
    //                 </div>
    //             )
    
    
    
            // }
        
}




export default ItemDetails;
