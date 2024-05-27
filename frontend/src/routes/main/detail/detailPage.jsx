import { useEffect, useState } from "react";
import HeaderPage from "../../../components/navbar/HeaderPage";
import "./detailPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailPageLeft from "./datailPage.left";
import DetailPageRight from "./datailPage.right";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const DetailPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const test = async () => {
      const res = await axios.get(`/detail/${params.detailId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    };
    test();
  }, []);
  return (
    <div className="parent">
      <HeaderPage />
      <main className="detail-main">
        <DetailPageLeft data={data} />
        <DetailPageRight data={data} />
      </main>
    </div>
  );
};
export default DetailPage;
