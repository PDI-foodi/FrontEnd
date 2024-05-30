import Modal from "react-bootstrap/Modal";
import "./reviewAdd.modal.css";
import CreateIcon from "@mui/icons-material/Create";
import { useEffect, useState } from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReviewUpdateModal = (props) => {
  const [showPencil, setShowPencil] = useState(false);
  const [contents, setContents] = useState(props.data.content);
  const [rate, setRate] = useState(props.data.rate);
  const [userId, setUserId] = useState("");
  const params = useParams();

  const onChangeReview = (e) => {
    setContents(e.target.value);
    setShowPencil(e.target.value === "");
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const res = await axios.get("/nickname/id");
      setUserId(res.data);
    };
    fetchUserId();
  });

  const onClickUpdate = async () => {
    try {
      const res = await axios.put(`/review/${props.curRId}`, {
        userId: userId,
        restaurantId: params.detailId,
        content: contents,
        rate: rate,
      });
      props.setShow(true);
      props.setShowModal(false);
      alert("리뷰가 수정되었습니다,");
      props.triggerRefresh();
    } catch (error) {
      alert("수정할 권한이 없습니다");
      props.setShow(false);
      props.setShowModal(false);
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose} backdrop={true}>
      <Modal.Header closeButton>
        <Modal.Title style={{ padding: "20px" }}>
          <div className="modal_header">
            <span className="modal_header_text">
              작성한 리뷰를
              <br /> 수정 해보세요!
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
            value={contents}
          ></textarea>
          {showPencil && <CreateIcon className="pencil_icon" />}
          <span className="text_length">{`${contents.length} / 400`}</span>
        </div>
        <div className="modal_star">
          <span className="modal_star_text">별점을 입력해보세요</span>
          <Rate
            className="star_rate"
            value={rate}
            allowHalf
            onChange={(v) => setRate(v)}
          />
        </div>
        <div className="footer_btn_div">
          <button onClick={props.handleClose} className="f_btn cancel_btn">
            <span>이전</span>
          </button>
          <button onClick={onClickUpdate} className="f_btn add_btn">
            등록
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ReviewUpdateModal;
