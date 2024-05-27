import { useEffect, useState } from "react";
import HeaderPage from "../../../components/navbar/HeaderPage";
import "./detailPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const DetailPage = () => {
  const params = useParams();
  useEffect(() => {
    const test = async () => {
      const res = await axios.get(`/detail/${params.detailId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    };
    test();
  }, []);
  return (
    <div className="parent">
      <HeaderPage />
      <main className="detail-main">
        <div className="detail_item"></div>
        <div className="detail_item"></div>
      </main>
    </div>
  );
};
export default DetailPage;
