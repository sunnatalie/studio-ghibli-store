import React, { FC } from 'react';
import styles from './Store.module.scss';

interface StoreProps {}

const Store: FC<StoreProps> = () => (
  <div className={styles.Store}>
    Store Component
  </div>
);

export default Store;
