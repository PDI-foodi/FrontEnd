import "./detailPage.left.css";
import StarRatings from "react-star-ratings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import DetailReviewPage from "./detailPage.review";
import { useEffect, useState } from "react";
import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const DetailPageLeft = (props) => {
  const [image, setImage] = useState([]);

  const extractMenuName = (name) => {
    // '성수역점' 또는 '성수역'이 포함된 경우 앞부분만 추출
    if (name?.includes("성수역점")) {
      return name?.split(" 성수역점")[0];
    } else if (name?.includes("성수점")) {
      return name?.split(" 성수점")[0];
    } else if (name?.includes("성수본점")) {
      return name?.split(" 성수본점")[0];
    } else if (name?.includes("성수")) {
      return name?.split(" 성수")[0];
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
  }, [menu]); // menu를 의존성 배열에 추가합니다.
  return (
    <div className="detail_left_item">
      <section>
        <div className="detail_img">
          {image?.map((e, i) => {
            return e.length > 0 ? (
              <div className="img_div">
                <img
                  key={i}
                  src={e}
                  alt="맛집 사진"
                  className="detail_food_img"
                />
              </div>
            ) : (
              <div className="img_div">
                <img
                  key={i}
                  src={"img/no_img.jpeg"}
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
            <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
              {props.data.name}
            </span>
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
      <DetailReviewPage
        data={props.data}
        rId={props.data.id}
        triggerRefresh={props.triggerRefresh}
      />
    </div>
  );
};
export default DetailPageLeft;
