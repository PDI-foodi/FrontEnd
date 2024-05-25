import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Rank.css";
import ImageSlider from "./ImageSlider.js";

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
      <ImageSlider restaurants={restaurants} />
    </div>
  );
}
