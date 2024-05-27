import "./detailPage.left.css";
import StarRatings from "react-star-ratings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import DetailReviewPage from "./detailPage.review";

const DetailPageLeft = (props) => {
  console.log(props.data);
  return (
    <div className="detail_left_item">
      <section>
        <div>
          <img
            src={props.data.imglink}
            alt="맛집 사진"
            className="detail_food_img"
          />
          <img
            src={props.data.imglink}
            alt="맛집 사진"
            className="detail_food_img"
          />
        </div>
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
