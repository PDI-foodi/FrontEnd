import "./reviewItem.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ReviewItem = () => {
  return (
    <div className="review_item">
      <div className="review_info_div">
        <AccountCircleIcon className="user_icon" />
        <div className="review_info">
          <span>ysy06053</span>
          <span>완전 맛있어요!!</span>
        </div>
        <span className="review_date">5일전</span>
      </div>
      <FavoriteIcon className="heart_icon" />
    </div>
  );
};
export default ReviewItem;
