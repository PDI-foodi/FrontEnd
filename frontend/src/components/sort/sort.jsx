import { React, useEffect, useState } from "react";
import axios from "axios";
import "./sort.css";
import { FaListUl } from "react-icons/fa";
import Card from "../rank/Card.jsx";
import "../rank/css/Card.css";

export default function Sort() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [randomindex, setrandomindex] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setShow(true);
      try {
        const allItems = await axios.get("http://localhost:5000/sort");
        const temp = allItems.data;
        full(temp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const random = (length) => {
    return parseInt(Math.random() * length);
  };
  const limitedRandomNumbers = (data) => {
    const randomNumbers = [];
    for (let i = 0; i < 4; i++) {
      randomNumbers.push(random(data.length));
    }
    return randomNumbers;
  };

  const full = (data) => {
    if (data.length >= 5) {
      const random = limitedRandomNumbers(data);
      const new_data = data.filter((elem, index) => random.includes(index));
      setData(new_data);
    } else {
      setData(data);
    }
  };

  const all = async () => {
    const allitems = await axios.get("http://localhost:5000/sort");
    setShow(true);
    const temp = allitems.data;
    full(temp);
  };

  const jjim = () => {};

  const western = async () => {
    const western = await axios.get("http://localhost:5000/sort/western");
    setShow(true);
    const temp = western.data;
    full(temp);
  };

  const korea = async () => {
    const korea = await axios.get("http://localhost:5000/sort/korea");
    setShow(true);
    const temp = korea.data;
    full(temp);
  };

  const japanese = async () => {
    const japanese = await axios.get("http://localhost:5000/sort/japanese");
    setShow(true);
    const temp = japanese.data;
    full(temp);
  };

  const dessert = async () => {
    const desert = await axios.get("http://localhost:5000/sort/desert");
    setShow(true);
    const temp = desert.data;
    full(temp);
  };
  const fastfood = async () => {
    const fastfood = await axios.get("http://localhost:5000/sort/fast-food");
    setShow(true);
    const temp = fastfood.data;
    full(temp);
  };
  const flour = async () => {
    const flour = await axios.get("http://localhost:5000/sort/flour");
    setShow(true);
    const temp = flour.data;
    full(temp);
  };
  const etc = async () => {
    const etc = await axios.get("http://localhost:5000/sort/etc");
    setShow(true);
    const temp = etc.data;
    full(temp);
  };

  return (
    <div>
      <div className="category">
        <div className="all" onClick={all}>
          <FaListUl className="all-icon" />
          전체
        </div>
        <div className="jjim" onClick={jjim}>
          <img src="/img/jjim.svg" className="jjim-icon" />찜
        </div>
        <div className="korea" onClick={korea}>
          <img src="/img/korea.png" className="korea-icon" />
          한식
        </div>
        <div className="western" onClick={western}>
          <img src="/img/western.png" className="western-icon" />
          양식
        </div>
        <div className="japanese" onClick={japanese}>
          <img src="/img/japanese.svg" className="japanese-icon" />
          일식
        </div>
        <div className="fastfood" onClick={fastfood}>
          <img src="/img/fastfood.svg" className="fastfood-icon" />
          패스트푸드
        </div>
        <div className="flour" onClick={flour}>
          <img src="/img/flour.png" className="flour-icon" />
          분식
        </div>
        <div className="dessert" onClick={dessert}>
          <img src="/img/dessert.svg" className="dessert-icon" />
          디저트
        </div>
        <div className="etc" onClick={etc}>
          기타
        </div>
      </div>
      {setShow && (
        <div className="show">
          {data.map((elem, index) => (
            <div key={index + 1}>
              <Card
                id={elem._id}
                img={elem.imglink}
                name={elem.name}
                rate={elem.rate}
                category={elem.category}
              />
              {/* <img src={elem.imglink}></img>
              {elem.name}
              {elem.category}
              {elem.rate} */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
