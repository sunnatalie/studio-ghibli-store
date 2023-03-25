import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className={styles.Footer}>
    Created by Natalie Sun ©
  </footer>
);

export default Footer;
