import "./reviewItem.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useRef } from "react";
import { Modal } from "react-bootstrap";

const ReviewItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const spanRef = useRef(null);

  const handleModalClose = () => setShowModal(false);

  const handleModalShow = (event) => {
    const rect = spanRef.current.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setShowModal((prev) => !prev);
  };

  const start = new Date(props.data.createdAt);
  const now = new Date();
  const timeDifference = now - start;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const displayDate = daysDifference === 0 ? "오늘" : `${daysDifference}일전`;

  return (
    <>
      <div className="review_item">
        <div className="review_info_div">
          <AccountCircleIcon className="user_icon" />
          <div className="review_info">
            <span>{props.data.user?.nickname}</span>
            <span>{props.data?.content}</span>
          </div>
          <span className="review_date">{displayDate}</span>
        </div>
        <span
          className="review_item_setting_icon"
          onClick={handleModalShow}
          ref={spanRef}
        >
          <MoreVertIcon />
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
            <div className="setting_div setting_div1">수정</div>
            <br />
            <div className="setting_div setting_div2">삭제</div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default ReviewItem;
