
// import React, { useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
// import styles from "./Slideshow.module.scss";

// interface SlideshowProps {
//   images: string[];
//   captions?: string[];
//   interval: number;
// }

// const Slideshow: React.FC<SlideshowProps> = ({ images, captions, interval }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, interval);

//     return () => clearInterval(intervalId);
//   }, [images.length, interval]);

//   return (
//     <div className={styles.Slideshow}>
//       {images.map((image, index) => (
//         <CSSTransition
//           key={index}
//           classNames={{
//             enter: styles.fadeEnter,
//             enterActive: styles.fadeEnterActive,
//             exit: styles.fadeExit,
//             exitActive: styles.fadeExitActive,
//           }}
//           timeout={{ enter: 1000, exit: 1000 }}
//           in={index === currentIndex}
//           unmountOnExit
//         >
//           <div className="slide">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className={styles.Slideshow__image}
//             />
//             {captions && captions[index] && (
//               <div className={styles.Slideshow__caption}>{captions[index]}</div>
//             )}
//           </div>
//         </CSSTransition>
//       ))}
//     </div>
//   );
// };

// export default Slideshow;

import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Slideshow.module.scss";

interface SlideshowProps {
  images: string[];
  captions?: string[];
  interval: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, captions, interval }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className={styles.Slideshow}>
      {images.map((image, index) => (
        <CSSTransition
          key={index}
          classNames={{
            enter: styles.fadeEnter,
            enterActive: styles.fadeEnterActive,
            exit: styles.fadeExit,
            exitActive: styles.fadeExitActive,
          }}
          timeout={{ enter: 2000, exit: 2000 }}
          in={index === currentIndex}
          mountOnEnter
          unmountOnExit
        >
          <div className={styles.Slideshow__slide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.Slideshow__image}
            />
            {captions && captions[index] && (
              <div className={styles.Slideshow__caption}>{captions[index]}</div>
            )}
          </div>
        </CSSTransition>
      ))}
    </div>
  );
};

export default Slideshow;

