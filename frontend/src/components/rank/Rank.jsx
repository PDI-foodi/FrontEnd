import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageSlider from "./ImageSlider.jsx";
import { FaCrown } from "react-icons/fa";
import "./css/Rank.css";

export default function Rank() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const RankData = async () => {
      try {
        const response = await axios.get("/ranking");
        setRestaurants(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    RankData();
  }, []);

  return (
    <div>
      <div className="title">
        <FaCrown className="crown1"/>
        <span className="rank">프디아 주간 TOP10</span>
        <FaCrown className="crown2"/>
      </div>
      <ImageSlider restaurants={restaurants} />
    </div>
  );
}
