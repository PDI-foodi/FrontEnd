import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../routes/login/loginPage";
import MainPage from "../routes/main/mainPage";
import MainLayPage from "../routes/main/layout";
import SignupPage from "../routes/signup/signupPage";
import DetailPage from "../routes/main/detail/detailPage";

const mainRouter = {
  path: "/main",
  element: <MainLayPage />,
  children: [
    {
      path: "",
      element: <MainPage />,
    },
    {
      path: ":detailId",
      element: <DetailPage />,
      index: true,
    },
  ],
};

export { mainRouter };
export default mainRouter;
