import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./sortcard.css";

function Cards({ id, img, name, rate, rank, category }) {
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
    <Card className="responsive-card2">
      <div className="card-img-container2">
        <img
          src={img}
          className="card-img2"
          alt={name}
          onClick={handleCardClick}
        />
        <div className="card-img-gradient2" onClick={handleCardClick}></div>
      </div>
      <Card.Body className="card-body2" onClick={handleCardClick}>
        <Card.Title className="card-title2">{name}</Card.Title>
        <Card.Text className="card-category2">{category}</Card.Text>
        <Card.Text className="card-rating2">{renderStars(rate)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
