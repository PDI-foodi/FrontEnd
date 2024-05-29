import { useEffect, useState } from "react";
import HeaderPage from "../../../components/navbar/HeaderPage";
import "./detailPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailPageLeft from "./detailPage.left";
import DetailPageRight from "./detailPage.right";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const DetailPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/detail/${params.detailId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data);
        setComments(res.data.comments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.detailId]); // params.detailId가 변경될 때마다 다시 데이터를 가져옵니다.

  return (
    <div className="parent">
      <HeaderPage />
      <main className="detail-main">
        <DetailPageLeft
          data={data}
          comments={comments}
          setComments={setComments}
        />
        <DetailPageRight data={data} />
      </main>
    </div>
  );
};
export default DetailPage;
