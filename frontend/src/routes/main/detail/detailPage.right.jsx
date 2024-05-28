import "./detailPage.right.css";
import NaverMap from "./naverMap";

const DetailPageRight = (props) => {
  return (
    <div className="detail_right_item">
      <NaverMap data={props.data} />
    </div>
  );
};
export default DetailPageRight;
