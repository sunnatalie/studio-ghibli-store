import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Item from '../../models/Item';
import data from '../../../public/images/kiki.jpeg';
import styles from './StoreItem.module.scss';

interface StoreItemProps {
    id:number;
    name: string;
    price: number; 
    imgUrl: string;
    hqimgUrl?: string;
}

const StoreItem: FC<StoreItemProps> = ({ id,name,price,imgUrl,hqimgUrl }:StoreItemProps) => {


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
        </div>
    )
}

export default StoreItem;
