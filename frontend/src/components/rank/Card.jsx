import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { PiHeart, PiHeartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./css/Card.css";

function Cards({ id, img, name, rate, rank, category }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} style={{ color: "gold" }} />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" style={{ color: "gold" }} />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} style={{ color: "gold" }} />);
    }

    return stars;
  };

  const handleCardClick = () => {
    navigate(`/main/${id}`);
  };

  return (
    <Card className="responsive-card">
      {/* <div className="rank-badge">{rank}</div> */}
      <div className="card-img-container">
        <img src={img} className="card-img" alt={name} onClick={handleCardClick}/>
        <div className="card-img-gradient" onClick={handleCardClick}></div>
      </div>
      {/* {isHovered || isClicked ? (
        <PiHeartFill
          className="heartfill-badge"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(!isClicked)}
        />
      ) : (
        <PiHeart
          className="heart-badge"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(!isClicked)}
        />
      )} */}
      <Card.Body className="card-body" onClick={handleCardClick}>
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-category">{category}</Card.Text>
        <Card.Text className="card-rating">{renderStars(rate)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
