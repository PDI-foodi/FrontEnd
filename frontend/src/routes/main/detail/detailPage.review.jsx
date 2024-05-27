import "./detailPage.review.css";
import Button from "react-bootstrap/Button";

const detailReviewPage = () => {
  const onClickAddReview = () => {};
  return (
    <section className="comment_div">
      <Button />
      <div className="comment_header">
        <span className="comment_title">댓글</span>
        <button className="comment_add_btn" onClick={onClickAddReview}>
          리뷰 작성하기
        </button>
      </div>
      <div className="review_item"></div>
      <div className="review_item"></div>
      <div className="review_item"></div>
      <div className="review_item"></div>
      <div className="review_item"></div>
      <div className="review_item"></div>
    </section>
  );
};
export default detailReviewPage;
