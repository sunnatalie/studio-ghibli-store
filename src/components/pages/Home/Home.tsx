import React, { FC, useEffect, useState } from 'react';
import Slideshow from '../../Slideshow/Slideshow';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

    const images = [
        '/images/train.jpeg',
        '/images/windrises.jpeg',
        '/images/backgroundspirited.jpeg'
      ];
    
      const captions = [
        'Spirited Away',
        'The Wind Rises',
        'Spirited Away'
      ];
    
      return (
        <div>
          <h1>Welcome to my homepage!</h1>
          <Slideshow images={images} captions={captions} interval={3000} />
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
