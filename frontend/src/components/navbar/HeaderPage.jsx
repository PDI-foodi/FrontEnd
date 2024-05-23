import "./HeaderPage.css";
const HeaderPage = () => {
  return (
    <>
      <div className="header">
        <img src="/img/pdlogo.png" alt="프디푸디" className="logo" />
        <span className="user_info">환영하니다 --님</span>
      </div>
      <div className="line"></div>
    </>
  );
};
export default HeaderPage;
