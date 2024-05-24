import { useEffect } from "react";
import HeaderPage from "../../../components/navbar/HeaderPage";
import "./detailPage.css";
import axios from "axios";

const DetailPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      axios.get("");
    };
  });
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
