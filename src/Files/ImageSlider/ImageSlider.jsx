import React, { useState, useEffect } from 'react';
import './ImageSlider.css'

const ImageSlider = ({ images, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Set up auto-sliding with an interval
  useEffect(() => {
    const intervalId = setInterval(goToNextImage, autoSlideInterval);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [autoSlideInterval]);

  return (
    <div className="slider-container">
      <button className="arrow-button left-arrow" onClick={handlePrevClick}>
        &#9664;
      </button>
      <img src={images[currentIndex]} alt="slider" className="image-slider" />
      <button className="arrow-button right-arrow" onClick={handleNextClick}>
        &#9654;
      </button>
    </div>
  );
}

export default ImageSlider