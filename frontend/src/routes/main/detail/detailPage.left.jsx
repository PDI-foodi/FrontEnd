import "./detailPage.left.css";
import StarRatings from "react-star-ratings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import DetailReviewPage from "./detailPage.review";
import NaverMapModal from "./naverMap.modal";
import { useEffect, useState } from "react";
import { TbMap2 } from "react-icons/tb";
import { useParams } from "react-router-dom";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlzeTA2MDUzIiwibmlja25hbWUiOiLsnbTsnqzsnbgiLCJpYXQiOjE3MTY3NzQ1MjUsImV4cCI6MTcxNzAzMzcyNX0.2XG3o1SmC8yBptHP3SBZWlPTQ_w_wupaaHBTgvBq-GU";

const DetailPageLeft = (props) => {
  const [image, setImage] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [jjim, setjjim] = useState(false);
  const params = useParams();
  const extractMenuName = (name) => {
    // '성수역점' 또는 '성수역'이 포함된 경우 앞부분만 추출
    if (name?.includes("성수역점")) {
      return name?.split(" 성수역점")[0];
    } else if (name?.includes("성수점")) {
      return name?.split(" 성수점")[0];
    } else if (name?.includes("성수본점")) {
      return name?.split(" 성수본점")[0];
    } else if (name?.includes("성수")) {
      return name?.split(" 성수")[0];
    }
    return name;
  };

  const menu = extractMenuName(props.data?.name);

  const onClickMapIcon = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`/image/naver?value=${menu}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let fetchedImages = res.data[menu];

        // Check if the number of images is less than 3
        if (fetchedImages.length < 3) {
          // Add "No Image" placeholder images until the array has at least 3 images
          const noImage = "/img/no_img4.gif";
          while (fetchedImages.length < 3) {
            fetchedImages.push(noImage);
          }
        }
        setImage(fetchedImages);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (menu) {
      fetchImage();
    }
  }, [menu]); // menu를 의존성 배열에 추가합니다.

  useEffect(() => {
    const fetch1 = async () => {
      const getid3 = await axios.get("/nickname/idd");
      const response = await axios.get("/like/findjjim", {
        params: {
          userId: getid3.data,
          restaurantId: params.detailId,
        },
      });
      if (response.status === 200) {
        setjjim(true);
      } else {
        setjjim(false);
      }
    };

    fetch1();
  }, []);

  const clickHeart = async () => {
    if (jjim === false) {
      const getid = await axios.get("/nickname/idd");
      await axios.post(`/detail/${params.detailId}`, {
        userId: getid.data,
      });
    } else if (jjim === true) {
      const getid2 = await axios.get("/nickname/idd");
      await axios.delete("/like", {
        data: {
          userId: getid2.data,
          restaurantId: params.detailId,
        },
      });
    }
    setjjim((prev) => !prev);
  };
  console.log(props.data);
  return (
    <div className="detail_left_item">
      <section>
        <div className="detail_img">
          {image?.map((e, i) => {
            return e.length > 0 ? (
              <div className="img_div">
                <img
                  key={i}
                  src={e}
                  alt="맛집 사진"
                  className="detail_food_img"
                />
              </div>
            ) : (
              <div className="img_div">
                <img
                  key={i}
                  src={"img/no_img.jpeg"}
                  alt="맛집 사진"
                  className="detail_food_img"
                />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="food_info">
          <div className="food_title_div">
            <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
              {props.data.name}
            </span>
            {jjim ? (
              <FavoriteIcon
                className="like_icon"
                style={{ color: "gold" }}
                onClick={clickHeart}
              />
            ) : (
              <FavoriteIcon className="like_icon" onClick={clickHeart} />
            )}
          </div>

          <span className="food_category">{props.data.category}</span>
          <div className="food_star">
            <StarRatings
              rating={props.data.rate}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              className="food_star_item"
              starDimension="22px" // 별의 크기를 지정합니다.
              starSpacing="2px" // 별 간의 간격을 지정합니다.
            />
            <span className="star_score">{props.data.rate}점</span>
            <span className="review_count">
              {props.data.comments.length}명의 평가
            </span>
          </div>
        </div>
        <div className="contour_line"></div>
        <div className="food_location_div">
          <div className="food_location_item">
            <FmdGoodIcon className="map_icon" />
            <div className="food_location_text" style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span>{props.data.location}</span>
                <div className="moblie_map_icon" onClick={onClickMapIcon}>
                  <TbMap2 className="naver_map_icon" />
                  <span className="moblie_map_icon_text">위치보기</span>
                </div>
              </div>
              <span>
                현재 위치로부터{" "}
                <span style={{ color: "blue", fontWeight: "bold" }}>216m</span>
              </span>
            </div>
          </div>
          <div className="food_location_item">
            <PhoneEnabledIcon className="map_icon" />
            <span>{props.data.phoneNumber}</span>
          </div>
        </div>
        <div className="contour_line"></div>
      </section>
      <DetailReviewPage
        data={props.data}
        rId={props.data.id}
        triggerRefresh={props.triggerRefresh}
      />
      {show && (
        <NaverMapModal
          show={show}
          data={props.data}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};
export default DetailPageLeft;
