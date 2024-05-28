import React from "react";
import MainPage from "../routes/main/mainPage";
import MainLayPage from "../routes/main/layout";
import DetailPage from "../routes/main/detail/detailPage";
const mainRouter = [
  {
    path: "/main",
    element: <MainLayPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
        index: true,
      },
      {
        path: ":detailId",
        element: <DetailPage />,
        index: true,
      },
    ],
  },
];

export { mainRouter };
export default mainRouter;
