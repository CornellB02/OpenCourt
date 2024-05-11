import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  './restaurants.css';
const PhotosCarousel = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => state.restaurants[restaurantId]);

  return (
    <div className='photos-container'>
      <h2>Photos</h2>
      <div className="carousel">
        <div className='c_pics'>
          <div className='space'><>space</></div>
          <a href={`https://steak-book-seeds.s3.amazonaws.com/${restaurant.id}.1.jpeg`} target="_blank" rel="noopener noreferrer">
            <img src={`https://steak-book-seeds.s3.amazonaws.com/${restaurant.id}.1.jpeg`} alt="Restaurant" className="other" />
          </a>
          <a href={`https://steak-book-seeds.s3.amazonaws.com/${restaurant.id}.2.jpeg`} target="_blank" rel="noopener noreferrer">
            <img src={`https://steak-book-seeds.s3.amazonaws.com/${restaurant.id}.2.jpeg`} alt="Restaurant" className="other" />
          </a>
          <a href={`https://steak-book-seeds.s3.amazonaws.com/${restaurant.id}.3.jpeg`} target="_blank" rel="noopener noreferrer">
            <img src={`https://steak-book-seeds.s3.amazonaws.com/${restaurant.id}.3.jpeg`} alt="Restaurant" className="other" />
          </a>
          {/* Add more images here */}
        </div>
      </div>
    </div>
  );
};

export default PhotosCarousel;
