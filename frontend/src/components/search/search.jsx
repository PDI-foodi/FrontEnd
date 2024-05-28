import "./search.css";
import { React, useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";

export default function Search() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const url = "http://localhost:5000/search/api/data"; //express.js 포트 변경 예정
  const headers = ""; //회원 로직 나중에 추가예정

  const searchBar = () => {
    setShow(true);
    console.log(url);
    axios.get(url + `?value=${text}`).then((response) => {
      setResult(response.data.result[0]);
    });
  };

  const Enter = (e) => {
    if (e.key === "Enter") {
      searchBar();
    }
  };

  const close = () => {
    setShow(false);
    setText("");
  };

  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="지역, 음식 또는 식당명 입력"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={Enter}
        ></input>
        <IoSearch className="searchIcon" onClick={searchBar} />
      </div>

      {show &&
        (result ? (
          <div className="result">
            검색결과는 {result.name}입니다!
            <button className="moveButton" onClick={() => {navigate(`/main/${result._id}`);}}>상세페이지로 이동하기</button>
            <MdCancel className="cancelButton" onClick={close}/>
          </div>
        ) : (
          <div className="result">검색 결과가 없습니다.</div>
        ))}
    </div>
  );
}
