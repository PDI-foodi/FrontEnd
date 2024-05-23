import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
  };

  const images = [
    "https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg",
    "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787778.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716076800&semt=ais_user",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1u5U1XUhoFX5i0JVutyZNGcGJ3nFsM03TBtM7xj0rQ&s",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
