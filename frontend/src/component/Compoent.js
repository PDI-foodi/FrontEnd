import React from "react";

import "./Compoent.css";

export default function Compoent() {
  return (
    <div>
      <div className="ranking"></div>
      <div className="searchbar">
        <input type="text" placeholder="지역, 음식 또는 식당명 입력"></input>
        <div>🔍</div>
      </div>
      <div className="foot">
        <div className="category">
          <div>전체</div>
          <div>찜</div>
          <div>양식</div>
          <div>한식</div>
          <div>일식</div>
          <div>디저트</div>
          <div>패스트푸드</div>
        </div>
        <div className="div-item">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
}
