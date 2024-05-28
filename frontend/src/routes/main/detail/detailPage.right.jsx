import { useEffect, useState } from "react";
import "./detailPage.right.css";
import NaverMap from "./naverMap";
import axios from "axios";
import RightFoodItem from "./right.foodItem";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const DetailPageRight = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/sort", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="detail_right_item">
      <NaverMap data={props.data} />
      <div className="right_choice_text_div">
        <span className="right_choice_text">다른 식당도 있어요</span>
      </div>

      <div className="right_food_list">
        {data.map((e, i) => {
          return <RightFoodItem data={e} key={i} />;
        })}
      </div>
    </div>
  );
};
export default DetailPageRight;
