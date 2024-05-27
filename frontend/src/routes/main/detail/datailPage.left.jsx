import "./detailPage.left.css";
import StarRatings from "react-star-ratings";

const DetailPageLeft = (props) => {
  console.log(props.data.imglink);
  return (
    <div className="detail_item">
      <section>
        <div>
          <img src={props.imglink} alt="맛집 사진" />
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
        </div>
        <div></div>
      </section>
    </div>
  );
};
export default DetailPageLeft;
