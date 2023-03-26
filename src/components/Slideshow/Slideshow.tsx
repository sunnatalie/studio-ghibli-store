import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Slideshow.module.scss"; // import the CSS file for the transition animation

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
    <div className="slideshow">
      {images.map((image, index) => (
        <CSSTransition
          key={index}
          classNames="fade"
          timeout={{ enter: 500, exit: 500 }}
          in={index === currentIndex}
          mountOnEnter
          unmountOnExit
        >
          <div className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
            {captions && captions[index] && (
              <div className="caption">{captions[index]}</div>
            )}
          </div>
        </CSSTransition>
      ))}
    </div>
  );
};

export default Slideshow;