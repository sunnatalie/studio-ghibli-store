import React, { FC } from 'react';
import storeItems from '../../data/items.json';
import StoreItem from '../../components/StoreItem/StoreItem';
import styles from './Store.module.scss';
import Item from '../../models/Item';

interface StoreProps {}

const Store: FC<StoreProps> = () => {

    return (

        <div className={styles.Store}>
            <h1>Store</h1>
            <div>
                {storeItems.map(item => (
                    <div key={item.id}>{<StoreItem {...item} />}</div>
                ))}
            </div>
        </div>

    )

}


export default Store;
