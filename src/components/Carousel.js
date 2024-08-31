import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    '/images/image1.jpeg',
    '/images/image2.jpeg',
    '/images/broken-link.jpeg', 
    '/images/image4.jpeg'
  ];
  const fallbackImage = '/images/fallback.jpeg';

  const totalSlides = slides.length;

  const showSlide = (index) => {
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const handleError = (event) => {
    event.target.src = fallbackImage;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            className="carousel-slide"
            src={slide}
            alt={`Slide ${index}`}
            onError={handleError}
          />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
