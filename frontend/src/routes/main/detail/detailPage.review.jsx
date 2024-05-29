/* eslint-disable react-hooks/rules-of-hooks */
import "./detailPage.review.css";
import { useState } from "react";
import ReviewAddModal from "./reviewAdd.modal";
import ReviewItem from "./reviewItem";
import axios from "axios";

const detailReviewPage = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);
  const [userId, setUserId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(false);
    try {
      const res = await axios.post("/review", {
        userId: userId,
        restaurantId: props.rId,
        content: text,
        rate: rate,
      });
      alert("리뷰가 성공적으로 작성되었습니다!");
      setText("");
      const arr = [...props.comments, res.data];
      props.setComments(arr);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  const onClickAddReview = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {show && (
        <ReviewAddModal
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          text={text}
          setText={setText}
          rate={rate}
          setRate={setRate}
          setUserId={setUserId}
        />
      )}
      <section className="comment_div">
        <div className="comment_header">
          <span className="comment_title">댓글</span>
          <button className="comment_add_btn" onClick={onClickAddReview}>
            리뷰 작성하기
          </button>
        </div>
        {props.comments?.map((e, i) => {
          return <ReviewItem data={e} />;
        })}
      </section>
    </>
  );
};
export default detailReviewPage;
