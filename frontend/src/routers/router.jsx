import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../routes/login/loginPage";
import SignupPage from "../routes/signup/signupPage";
import { mainRouter } from "./main-router";

export const routerObj = [
  {
    path: "/",
    element: <LoginPage />,
    index: true, //
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  mainRouter,
];
const router = createBrowserRouter(routerObj);
export default router;
