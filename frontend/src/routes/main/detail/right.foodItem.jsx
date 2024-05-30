import PlaceIcon from "@mui/icons-material/Place";
import "./right.foodItem.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const RightFoodItem = (props) => {
  const [image, setImage] = useState([]);
  const navigate = useNavigate();

  const extractMenuName = (name) => {
    if (name.includes("성수역점")) {
      return name.split(" 성수역점")[0];
    } else if (name.includes("성수점")) {
      return name.split(" 성수점")[0];
    } else if (name.includes("성수본점")) {
      return name.split(" 성수본점")[0];
    } else if (name.includes("성수")) {
      return name.split(" 성수")[0];
    }
    return name;
  };

  const menu = extractMenuName(props.data?.name);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`/image/naver?value=${menu}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setImage(res.data[menu]);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (menu) {
      fetchImage();
    }
  }, [menu]);

  const onCLickMove = () => {
    navigate(`/main/${props.data.id}`);
  };

  return (
    <div
      className="item_parent"
      onClick={onCLickMove}
      style={{ cursor: "pointer" }}
    >
      <div className="item_div">
        <div className="item_div_text">
          <span>{props.data.name}</span>
          <span>{props.data.category}</span>
        </div>
        <div>
          <PlaceIcon className="lc_icon" />
          <span>216m</span>
        </div>
      </div>
      <div className="detail_other_food_div">
        <img
          src={image?.[0] || "/img/no_img4.gif"}
          alt=""
          className="detail_other_food_img"
        />
        <img
          src={image?.[1] || "/img/no_img4.gif"}
          alt="맛집 사진"
          className="detail_other_food_img"
        />
      </div>
    </div>
  );
};

export default RightFoodItem;
