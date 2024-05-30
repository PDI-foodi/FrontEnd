import { useEffect, useState } from "react";
import HeaderPage from "../../../components/navbar/HeaderPage";
import "./detailPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailPageLeft from "./detailPage.left";
import DetailPageRight from "./detailPage.right";

const token = "YOUR_JWT_TOKEN_HERE";

const DetailPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [params.detailId, refresh]);
  const triggerRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="parent">
      <HeaderPage />
      <main className="detail-main">
        <DetailPageLeft
          data={data}
          setComments={setComments}
          triggerRefresh={triggerRefresh} // Pass triggerRefresh to child
        />
        <DetailPageRight data={data} />
      </main>
    </div>
  );
};

export default DetailPage;
