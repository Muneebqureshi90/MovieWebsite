import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import MovieCard from './MovieCard'; // Adjust the path as necessary

const TrendingMovies = ({ data, handleClick }) => {
    return (
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={1000}
            >
                {data.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <MovieCard item={item} handleClick={handleClick} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TrendingMovies;
