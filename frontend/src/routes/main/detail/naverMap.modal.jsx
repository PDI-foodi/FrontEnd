import Modal from "react-bootstrap/Modal";
import "./reviewAdd.modal.css";
import CreateIcon from "@mui/icons-material/Create";
import { useEffect, useState } from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import PdNaverMap from "./naverMap";
import axios from "axios";

const NaverMapModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} backdrop={true}>
      <Modal.Header closeButton>
        <Modal.Title style={{ padding: "20px" }}>
          <div className="modal_header">
            <span className="modal_header_text">
              {props.data.name}
              <br /> 위치를 쉽게 찾아보세요
            </span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "10px", paddingTop: "10px" }}>
        <PdNaverMap data={props.data} />
      </Modal.Body>
    </Modal>
  );
};
export default NaverMapModal;
