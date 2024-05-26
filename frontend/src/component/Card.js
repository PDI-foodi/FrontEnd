import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

function Cards({ img, name, rate, rank, category }) {
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

  return (
    <Card className="responsive-card">
      <div className="rank-badge">{rank}</div>
      <div className="card-img-container">
        <img src={img} className="card-img" alt={name} />
        <div className="card-img-gradient"></div>
      </div>
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-category">{category}</Card.Text>
        <Card.Text className="card-rating">{renderStars(rate)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
