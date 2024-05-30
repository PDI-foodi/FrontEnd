import "./HeaderPage.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const HeaderPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getnickname = await axios.get("/nickname");
        const nick = getnickname.data;
        setNickname(nick);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = () => {
    navigate(`/main`);
  };
  return (
    <>
      <div className="header">
        <img
          src="/img/pdlogo.png"
          alt="프디푸디"
          className="logo"
          onClick={handleCardClick}
        />
        <div className="headerDiv">
          <Button
            onClick={() => navigate("/main/random")}
            className="headerbutton"
          >
            오늘 뭐 먹지?
          </Button>
          <span className="user_info">
            환영합니다 <br />
            {nickname}님
          </span>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};
export default HeaderPage;
