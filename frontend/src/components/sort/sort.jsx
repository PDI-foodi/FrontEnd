import { React, useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./sort.css";
import { FaListUl,FaRegArrowAltCircleRight } from "react-icons/fa";
import Card from "./sortcard.jsx";

export default function Sort() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setShow(true);
      try {
        const allItems = await axios.get("http://localhost:5000/sort");
        const temp = allItems.data;
        setCurrentIndex(itemsPerPage);
        setData(temp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const lastItem = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const all = async () => {
    const allitems = await axios.get("http://localhost:5000/sort");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = allitems.data;
    setData(temp);
  };

  const jjim = async () => {
    const like = await axios.get("http://localhost:5000/like");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = like.data;
    setData(temp);
  };

  const western = async () => {
    const western = await axios.get("http://localhost:5000/sort/western");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = western.data;
    setData(temp);
  };

  const korea = async () => {
    const korea = await axios.get("http://localhost:5000/sort/korea");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = korea.data;
    setData(temp);
  };

  const japanese = async () => {
    const japanese = await axios.get("http://localhost:5000/sort/japanese");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = japanese.data;
    setData(temp);
  };

  const dessert = async () => {
    const desert = await axios.get("http://localhost:5000/sort/desert");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = desert.data;
    setData(temp);
  };
  const fastfood = async () => {
    const fastfood = await axios.get("http://localhost:5000/sort/fast-food");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = fastfood.data;
    setData(temp);
  };
  const flour = async () => {
    const flour = await axios.get("http://localhost:5000/sort/flour");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = flour.data;
    setData(temp);
  };
  const etc = async () => {
    const etc = await axios.get("http://localhost:5000/sort/etc");
    setCurrentIndex(itemsPerPage);
    setShow(true);
    const temp = etc.data;
    setData(temp);
  };

  const renderMoreItems = () => {
    const itemsToRender = data.slice(0, currentIndex);
    return itemsToRender.map((elem, index) => {
      if (index === itemsToRender.length - 1) {
        return (
          <div key={index} className="sort-cards" ref={lastItem}>
            <Card
              className="sort-card"
              id={elem._id}
              img={elem.imglink}
              name={elem.name}
              rate={elem.rate}
              category={elem.category}
            />
          </div>
        );
      } else {
        return (
          <div key={index} className="sort-cards">
            <Card
              className="sort-card"
              id={elem._id}
              img={elem.imglink}
              name={elem.name}
              rate={elem.rate}
              category={elem.category}
            />
          </div>
        );
      }
    });
  };

  return (
    <div>
      <div className="category">
        <div className="all" onClick={all}>
          <FaListUl className="all-icon" />
          전체
        </div>
        <div className="jjim" onClick={jjim}>
          <img src="/img/jjim.svg" className="jjim-icon" alt="jjim-icon" />찜
        </div>
        <div className="korea" onClick={korea}>
          <img src="/img/korea.png" className="korea-icon" alt="korea-icon" />
          한식
        </div>
        <div className="western" onClick={western}>
          <img
            src="/img/western.png"
            className="western-icon"
            alt="western-icon"
          />
          양식
        </div>
        <div className="japanese" onClick={japanese}>
          <img
            src="/img/japanese.svg"
            className="japanese-icon"
            alt="japanese-icon"
          />
          일식
        </div>
        <div className="fastfood" onClick={fastfood}>
          <img
            src="/img/fastfood.svg"
            className="fastfood-icon"
            alt="fastfood-icon"
          />
          패스트푸드
        </div>
        <div className="flour" onClick={flour}>
          <img src="/img/flour.png" className="flour-icon" alt="flour-icon" />
          분식
        </div>
        <div className="dessert" onClick={dessert}>
          <img
            src="/img/dessert.svg"
            className="dessert-icon"
            alt="dessert-icon"
          />
          디저트
        </div>
        <div className="etc" onClick={etc}>
          기타
        </div>
        {/* <FaRegArrowAltCircleRight className="arrows"/> */}
      </div>
      {show && <div className="show2">{renderMoreItems()}</div>}
    </div>
  );
}
