import "./reviewItem.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const ReviewItem = (props) => {
  console.log(props.data);
  const [showModal, setShowModal] = useState(false);
  const [curRId, setCurRId] = useState("");
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const spanRef = useRef(null);

  const start = new Date(props.data.createdAt);
  const now = new Date();
  const timeDifference = now - start;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const displayDate = daysDifference === 0 ? "오늘" : `${daysDifference}일전`;

  const handleModalClose = () => setShowModal(false);

  const handleModalShow = (event) => {
    const rect = spanRef.current.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setShowModal((prev) => !prev);
    const parentId = event.currentTarget.closest(".review_item").id;
    console.log(parentId);
    setCurRId(parentId);
  };

  const onClickUpdate = () => {};
  const onClickDelete = async () => {
    await axios.delete(`/review/${curRId}`);
    props.triggerRefresh();
    alert("삭제되었습니다");
  };

  return (
    <>
      <div className="review_item" id={props.id}>
        <div className="review_info_div">
          <AccountCircleIcon className="user_icon" />
          <div className="review_info">
            <span>{props.data.user?.nickname}</span>
            <span>{props.data?.content}</span>
            <StarRatings
              rating={props.data.rate}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              className="review_star_item"
              starDimension="14px" // 별의 크기를 지정합니다.
              starSpacing="2px" // 별 간의 간격을 지정합니다.
            />
          </div>
          <span className="review_date">{displayDate}</span>
        </div>
        <span
          className="review_item_setting_icon"
          onClick={handleModalShow}
          ref={spanRef}
        >
          <MoreVertIcon style={{ cursor: "pointer" }} />
        </span>
      </div>
      {showModal && (
        <Modal
          show={showModal}
          onHide={handleModalClose}
          style={{
            position: "absolute",
            top: modalPosition.top,
            left: modalPosition.left,
            width: "170px",
            height: "170px",
          }}
          dialogClassName="custom-modal"
          backdropClassName="custom-backdrop"
        >
          <Modal.Body style={{ padding: "0px" }}>
            <div className="setting_div setting_div1" onClick={onClickUpdate}>
              수정
            </div>
            <br />
            <div className="setting_div setting_div2" onClick={onClickDelete}>
              삭제
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default ReviewItem;
