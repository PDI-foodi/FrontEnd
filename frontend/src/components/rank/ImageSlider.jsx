import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/ImageSlider.css";
import Card from "./Card.jsx";

const ImageSlider = ({ restaurants }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "1px",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {restaurants.map((restaurant, index) => (
          <div key={index}>
            <Card
              id={restaurant._id}
              img={restaurant.imglink}
              name={restaurant.name}
              rate={restaurant.rate}
              rank={`${index + 1}등`}
              category={restaurant.category}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
