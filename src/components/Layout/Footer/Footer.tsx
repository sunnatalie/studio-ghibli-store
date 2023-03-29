import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
    <footer className={styles.Footer}>
        <p>Created by Natalie Sun ©</p>
        <div className={styles.Footer__links}>
            <p>Github</p>
            <p>LinkedIn</p>
        </div>
    </footer>
);

export default Footer;
