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

  const logoutHandling = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      const logoutData = async () => {
        try {
          const response = await axios.get("/users/logout");

          console.log(response.status);

          if (response.status === 200) {
            alert("로그아웃 성공!");
            console.log(response.status);
            navigate(`/`);
          } else {
            alert("로그아웃에 실패했습니다.");
          }
        } catch (error) {
          alert("로그아웃에 실패했습니다.");
          console.error("로그아웃 실패: ", error);
        }
      };
      logoutData();
    }
  };

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
          <span className="user_info" onClick={logoutHandling}>
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
