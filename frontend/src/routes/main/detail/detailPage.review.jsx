import "./detailPage.review.css";
import { useState } from "react";
import ReviewAddModal from "./reviewAdd.modal";
import ReviewItem from "./reviewItem";
import Button from "react-bootstrap/Button";

const detailReviewPage = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClickAddReview = () => {
    setShow((prev) => !prev);
  };
  const comments = props.data;
  return (
    <>
      {show && (
        <ReviewAddModal
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      )}
      <section className="comment_div">
        <div className="comment_header">
          <span className="comment_title">댓글</span>
          <button className="comment_add_btn" onClick={onClickAddReview}>
            리뷰 작성하기
          </button>
        </div>
        {comments?.map((e, i) => {
          return <ReviewItem data={e} />;
        })}
      </section>
    </>
  );
};
export default detailReviewPage;
