import "./detailPage.left.css";
import StarRatings from "react-star-ratings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import DetailReviewPage from "./detailPage.review";
import { useEffect, useState } from "react";
import axios from "axios";
const no_img_url = "https://donghyub.doit-partners.com/images/noimage.gif";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const DetailPageLeft = (props) => {
  console.log(props.data);
  const [image, setImage] = useState([]);
  const menu = props.data.name?.split(" ")[0];

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`/image/naver?value=${menu}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const images = res.data.length ? res.data : [no_img_url];
        while (res.data.length < 3) {
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
  }, [menu]); // menu를 의존성 배열에 추가합니다.
  console.log(image);
  return (
    <div className="detail_left_item">
      <section>
        <div className="detail_img">
          {image.map((e, i) => {
            return (
              <div className="img_div">
                <img
                  key={i}
                  src={e}
                  alt="맛집 사진"
                  className="detail_food_img"
                />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="food_info">
          <div className="food_title_div">
            <h1>{props.data.name}</h1>
            <FavoriteIcon className="like_icon" />
          </div>

          <span className="food_category">{props.data.category}</span>
          <div className="food_star">
            <StarRatings
              rating={props.data.rate}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              className="food_star_item"
              starDimension="22px" // 별의 크기를 지정합니다.
              starSpacing="2px" // 별 간의 간격을 지정합니다.
            />
            <span className="star_score">{props.data.rate}점</span>
            <span className="review_count">5명의 평가</span>
          </div>
        </div>
        <div className="contour_line"></div>
        <div className="food_location_div">
          <div className="food_location_item">
            <FmdGoodIcon className="map_icon" />
            <div className="food_location_text">
              <span>{props.data.location}</span>
              <span>
                현재 위치로부터{" "}
                <span style={{ color: "blue", fontWeight: "bold" }}>216m</span>
              </span>
            </div>
          </div>
          <div className="food_location_item">
            <PhoneEnabledIcon className="map_icon" />
            <span>{props.data.phoneNumber}</span>
          </div>
        </div>
        <div className="contour_line"></div>
      </section>
      <DetailReviewPage />
    </div>
  );
};
export default DetailPageLeft;
