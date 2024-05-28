import PlaceIcon from "@mui/icons-material/Place";
import "./right.foodItem.css";
import { useEffect, useState } from "react";
import axios from "axios";
const no_img_url = "https://donghyub.doit-partners.com/images/noimage.gif";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const RightFoodItem = (props) => {
  const [image, setImage] = useState([]);
  const menu = props.data.name?.split(" ")[0];
  console.log(menu);

  /*  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5001/image/naver?value=${menu}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const images = res.data.length ? res.data : [no_img_url];
        while (images.length < 3) {
          images.push(no_img_url);
        }
        setImage(images);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (menu) {
      fetchImage();
    }
  }, [menu]); // menu를 의존성 배열에 추가합니다. */
  console.log(image);

  return (
    <div className="item_parent">
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
      <div>
        {/* <img
          src={image[1]}
          alt="맛집 사진"
          style={{ width: "100px", height: "100px" }}
        /> */}
      </div>
    </div>
  );
};

export default RightFoodItem;
