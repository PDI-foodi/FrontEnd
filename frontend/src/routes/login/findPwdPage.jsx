import HeaderPage from "../../components/navbar/Signup-Header";
import FooterPage from "../../components/footer/Signup-Footer";
import FindPwd from "../../components/login/FindPwd";

const FindPwdPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <HeaderPage />

      <div style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <FindPwd />
      </div>
      <FooterPage />
    </div>
  );
};

export default FindPwdPage;
