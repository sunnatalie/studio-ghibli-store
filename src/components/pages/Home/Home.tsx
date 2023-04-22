import React, { FC, useEffect, useState } from 'react';
import Slideshow from '../../Slideshow/Slideshow';
import Store from '../Store/Store';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

    const images = [
        '/images/train.jpeg',
        '/images/windrises.jpeg',
        '/images/backgroundspirited.jpeg',
        '/images/porco.jpeg',
        '/images/catreturns.jpeg',
        '/images/totoroslide.jpeg',
        '/images/nausicaa1.jpg',
        '/images/laputa1.jpg',
        '/images/arietty1.jpg',
        '/images/mononoke1.jpg',

      ];
    
      const captions = [
        'Spirited Away',
        'The Wind Rises',
        'Spirited Away',
        'Porco Rosso',
        'The Cat Returns',
        'My Neighbor Totoro',
        'Nausicaa',
        'Castle in the Sky',
        'Arietty',
        'Princess Mononoke'
      ];
    
      return (
        <div>
          <Slideshow images={images} captions={captions} interval={20000} />
          {/* <Store /> */}
        </div>
      );
    };


        // <div className={styles.Home}>
        //     <ul className={styles.Home__fadingslideshow}>
        //         <li className={styles.Home__slides}>
        //             <img src="/images/train.jpeg" alt="" className={styles.Home__image}/>
        //             {/* <div style={{backgroundImage: `url("../../../../public/images/train.jpeg")`}}></div> */}
        //             <div className={styles.Home__caption}>Spirited Away</div>
        //         </li>
        //         {/* <li className={styles.Home__slides}> */}
        //             {/* <img src="/images/windrises.jpeg" alt="" className={styles.Home__image}/> */}
        //             {/* <div style={{backgroundImage: `url("../../../../public/images/train.jpeg")`}}></div> */}
        //             {/* <div className={styles.Home__caption}>The Wind Rises</div> */}
        //         {/* </li> */}
        //         {/* <li className={styles.Home__slides}> */}
        //             {/* <img src="/images/backgroundspirited.jpeg" alt="" className={styles.Home__image}/> */}
        //             {/* <div style={{backgroundImage: `url("../../../../public/images/train.jpeg")`}}></div> */}
        //             {/* <div className={styles.Home__caption}>Spirited Away</div> */}
        //         {/* </li> */}
        //     </ul>
        // </div>



export default Home;
