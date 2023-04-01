import React, { useState, useEffect } from "react";
import { DescDiv, ImgDiv } from "./DetailStyle";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { tastePick } = location.state;
  const [imageUrl, setImageUrl] = useState(null);

  // Use the tastePick data here
  console.log("in detail: ", tastePick.join(" "));

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: tastePick.join(" ") }),
    };

    fetch("http://localhost:8000/test", requestOptions)
      .then((response) => response.json())
      .then((data) => setImageUrl(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <DescDiv>
      <h1>IT기업 감성 UX라이터</h1>
      {imageUrl && (
        <ImgDiv>
          <img id="createdImg" src={imageUrl} alt="DALLE" />
        </ImgDiv>
      )}
    </DescDiv>
  );
};

export default Detail;
