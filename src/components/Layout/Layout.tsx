import React, { FC } from 'react';
import styles from './Layout.module.scss';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
    <div className={styles.Layout}>
        <Navbar />
        <Main />
        <Footer />
    </div>
);

export default Layout;
