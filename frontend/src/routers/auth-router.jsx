import React from "react";
import LoginPage from "../routes/login/loginPage";
import SignupPage from "../routes/signup/signupPage";

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
];

export { authRouter };
export default authRouter;
