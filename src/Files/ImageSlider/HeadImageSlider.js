import React, { useState, useEffect } from 'react'
import './BigSlider.css'

const HeadImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slider">
            <div
                className="slides"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className='headimage' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeadImageSlider;