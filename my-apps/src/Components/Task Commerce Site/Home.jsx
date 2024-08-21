import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const images = [
  'https://commercejs-demo-store.netlify.app/images/home-1.jpg',
  'https://commercejs-demo-store.netlify.app/images/home-2.jpg',
  'https://commercejs-demo-store.netlify.app/images/home-3.jpg',
  'https://commercejs-demo-store.netlify.app/images/home-4.jpg'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
    <div className="home">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Sliding banner ${index}`}
          className={`home-image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
      <div className="home-content">
        <h1>The care you've always needed</h1>
        <p>A RANGE OF PRODUCTS FOR YOU</p>
        <Link to = '/shop'><button className="shop-button">Shop now</button></Link>
      </div>
    </div>

    <div className="essence-section">
      <h1>MOISTURE IS THE ESSENCE OF WETNESS, AND WETNESS IS THE<br/>ESSENCE OF BEAUTY.</h1>
      <div className="find-more">
        <a href="#find-out-more" className="find-more-link">
          Find out more <span className="arrow">→</span>
        </a>
      </div>
    </div>
    </>
  );
};

export default Home;




