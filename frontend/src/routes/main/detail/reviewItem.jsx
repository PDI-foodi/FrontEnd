import "./reviewItem.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ReviewItem = (props) => {
  const start = new Date(props.data.createdAt);
  const now = new Date();

  const timeDifference = now - start;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const displayDate = daysDifference === 0 ? "오늘" : `${daysDifference}일전`;
  return (
    <div className="review_item">
      <div className="review_info_div">
        <AccountCircleIcon className="user_icon" />
        <div className="review_info">
          <span>{props.data.user.nickname}</span>
          <span>{props.data.content}</span>
        </div>
        <span className="review_date">{displayDate}</span>
      </div>
      <FavoriteIcon className="heart_icon" />
    </div>
  );
};
export default ReviewItem;
