import "./detailPage.left.css";
import StarRatings from "react-star-ratings";

const DetailPageLeft = (props) => {
  console.log(props.data);
  return (
    <div className="detail_item">
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
          <h1>{props.data.name}</h1>
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
          </div>
        </div>
      </section>
    </div>
  );
};
export default DetailPageLeft;
