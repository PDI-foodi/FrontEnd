import "./Signup-Footer.css";
import { useNavigate } from "react-router-dom";

const HeaderPage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/main`);
  };
  return (
    <div className="signup-total_footer">
      <div className="signup-line2"></div>
      <div className="footer">
        <span>
          {/* <span className="pda">PDA 4th</span> */}
          <img
            src="/img/shinhan.png"
            alt="프디푸디"
            className="logo3"
            onClick={handleCardClick}
          />
        </span>
        <div className="signup-author">
          Project by <br></br> <span>Jaeho, Jinhyeok, Hyeonju, Jaein</span>
        </div>
      </div>
    </div>
  );
};
export default HeaderPage;
