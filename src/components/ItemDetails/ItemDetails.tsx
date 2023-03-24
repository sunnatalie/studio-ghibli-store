import React, { FC } from 'react';
import styles from './ItemDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Item from '../../models/Item';
import StoreItem from '../StoreItem/StoreItem';

interface ItemDetailsProps {
    id: number;
    name: string;
    price: number; 
    imgUrl: string;
    hqimgUrl?: string;
}

const ItemDetails: FC<ItemDetailsProps> = (
    { id,name,price,imgUrl,hqimgUrl }:ItemDetailsProps
    ) => {

    // const { id } = useParams();
    // const navigate = useNavigate();
    const { itemId } = useParams();

    return(
        <div>
            <img src={ hqimgUrl }></img>
            <p>{ name }</p>
            <p>{ price }</p>    
        </div>
      );
}


export default ItemDetails;
