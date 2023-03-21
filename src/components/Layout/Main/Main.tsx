import React, { FC } from 'react';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className={styles.Main}>
    Main Component
  </main>
);

export default Main;
