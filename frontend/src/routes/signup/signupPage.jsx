import HeaderPage from "../../components/navbar/Signup-Header";
import FooterPage from "../../components/footer/Signup-Footer";
import Signup from "../../components/signup/Signup";

const SignupPage = () => {
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
        <Signup />
      </div>
      <FooterPage />
    </div>
  );
};
export default SignupPage;
