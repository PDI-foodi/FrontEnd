import React, { useEffect, useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const PdNaverMap = (props) => {
  const navermaps = useNavermaps();
  const [coordinates, setCoordinates] = useState(null);
  const address = props.data.location; // 변수명을 소문자로 변경

  useEffect(() => {
    const geocodeAddress = () => {
      navermaps.Service.geocode(
        {
          query: address, // Address 대신 address 사용
        },
        function (status, response) {
          if (status !== navermaps.Service.Status.OK) {
            return alert("Something wrong!");
          }
          const result = response.v2.addresses[0];
          setCoordinates({
            lat: parseFloat(result.y),
            lng: parseFloat(result.x),
          });
        }
      );
    };

    if (navermaps && address) {
      // address가 존재할 때만 실행
      geocodeAddress();
    }
  }, [navermaps, address]);

  return (
    <>
      <MapDiv style={{ width: "100%", height: "300px" }}>
        {coordinates ? (
          <NaverMap
            defaultCenter={
              new navermaps.LatLng(coordinates.lat, coordinates.lng)
            }
            defaultZoom={15}
            zoomControl={true}
            zoomControlOptions={{
              position: navermaps.Position.TOP_RIGHT,
              style: navermaps.ZoomControlStyle.SMALL, // 작은 사이즈로 설정
              scale: 0.5, // 크기를 조정할 수 있습니다. (0.5는 기존 크기의 반)
            }}
          >
            <Marker
              position={new navermaps.LatLng(coordinates.lat, coordinates.lng)}
            />
          </NaverMap>
        ) : (
          <div>Loading...</div> // 로딩 중일 때 표시할 내용
        )}
      </MapDiv>
      <div
        style={{
          padding: "10px",
          fontSize: "13px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <div>{`${props.data.name} 성수역점`}</div>
          <div>{props.data.location}</div>
        </div>
        <AdsClickIcon style={{ color: "#36AC5E" }} />
      </div>
    </>
  );
};

export default PdNaverMap;
