import React from "react";
import LoginPage from "../routes/login/loginPage";
import SignupPage from "../routes/signup/signupPage";
import FindPwdPage from "../routes/login/findPwdPage";

const authRouter = [
  {
    path: "/",
    element: <LoginPage />,
    index: true, //
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/find-pwd",
    element: <FindPwdPage />,
  }
];

export { authRouter };
export default authRouter;
