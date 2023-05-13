import blur from '../../images/Ellipse 3.png';
import blueBlur from '../../images/blue blur.png';
import purpleBlur from '../../images/purple blur.png';
import React, { useState, useEffect } from 'react';
import './index.scss';

function BlurEffect(){
    const [blurImages, setBlurImages] = useState([
        { src: blur, show: false },
        { src: blueBlur, show: false },
        { src: purpleBlur, show: false },
      ]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * blurImages.length);
          const updatedBlurImages = [...blurImages];
          updatedBlurImages[randomIndex].show = true;
          setBlurImages(updatedBlurImages);
          setTimeout(() => {
            updatedBlurImages[randomIndex].show = false;
            setBlurImages(updatedBlurImages);
          }, 2000);
        }, 3000);
        return () => clearInterval(interval);
      }, [blurImages]);

      return(
        <div>
        {blurImages.map((blurImage, index) => (
            <div className={`blur blur${index}`} key={`blur${index}`}>
              {blurImage.show && <img alt={`blur${index}`} src={blurImage.src} />}
            </div>
          ))}
          </div>
      )
    
}

export default BlurEffect;