import React, { useEffect, useState } from "react";
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
