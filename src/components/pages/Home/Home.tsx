import React, { FC } from 'react';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return(
        <div className={styles.Home}>
            <div className={styles.Home__myslides}>
                <img src="/images/train.jpeg" alt="" className={styles.Home__image}/>
                {/* <div style={{backgroundImage: `url("../../../../public/images/train.jpeg")`}}></div> */}
                <div className={styles.Home__caption}>Spirited Away</div>
            </div>
        </div>
    );
}


export default Home;
