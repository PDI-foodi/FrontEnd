import Modal from "react-bootstrap/Modal";
import "./reviewAdd.modal.css";
import CreateIcon from "@mui/icons-material/Create";
import { useEffect, useState } from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import axios from "axios";

const ReviewAddModal = (props) => {
  const [showPencil, setShowPencil] = useState(true);

  const onChangeReview = (e) => {
    props.setText(e.target.value);
    setShowPencil(e.target.value === "");
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const res = await axios.get("/nickname/id");
      props.setUserId(res.data);
    };
    fetchUserId();
  });

  return (
    <Modal show={props.show} onHide={props.handleClose} backdrop={true}>
      <Modal.Header closeButton>
        <Modal.Title style={{ padding: "20px" }}>
          <div className="modal_header">
            <span className="modal_header_text">
              다녀온 곳의
              <br /> 리뷰를 써 보세요!
            </span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "30px", paddingTop: "20px" }}>
        <div style={{ position: "relative" }}>
          <textarea
            className="review_text"
            placeholder="리뷰를 작성해주세요!"
            onChange={onChangeReview}
            value={props.text}
          ></textarea>
          {showPencil && <CreateIcon className="pencil_icon" />}
          <span className="text_length">{`${props.text.length} / 400`}</span>
        </div>
        <div className="modal_star">
          <span className="modal_star_text">별점을 입력해보세요</span>
          <Rate
            className="star_rate"
            value={props.rate}
            allowHalf
            onChange={(v) => props.setRate(v)}
          />
        </div>
        <div className="footer_btn_div">
          <button onClick={props.handleClose} className="f_btn cancel_btn">
            <span>이전</span>
          </button>
          <button onClick={props.handleShow} className="f_btn add_btn">
            등록
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ReviewAddModal;
