import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ restaurants }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true,
    centerPadding: "1",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
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
          <div>
            <img src={restaurant.imglink} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
