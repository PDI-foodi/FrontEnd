import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function TopButton() {
  const handleScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <BsFillArrowUpCircleFill
        onClick={handleScroll}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          fontSize: "24px",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
