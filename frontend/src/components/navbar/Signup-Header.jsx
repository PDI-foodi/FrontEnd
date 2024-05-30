import "./Signup-Header.css";
import { useNavigate } from "react-router-dom";

const HeaderPage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/main`);
  };
  return (
    <>
      <div className="header">
        <img
          src="/img/pdlogo.png"
          alt="프디푸디"
          className="signup-header-logo"
          onClick={handleCardClick}
        />
      </div>
      <div className="line"></div>
    </>
  );
};
export default HeaderPage;
