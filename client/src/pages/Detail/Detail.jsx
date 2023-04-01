import React, { useState, useEffect } from "react";
import { DescDiv, ImgDiv } from "./DetailStyle";
import { useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const Detail = () => {
  const [loading, setLoading] = useState(false);
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

    const postData = fetch("http://localhost:8000/dalle", requestOptions)
      .then((response) => response.json())
      .then((data) => setImageUrl(data))
      .catch((error) => console.log(error));

    if (postData) {
      setLoading(!loading);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DescDiv>
          <h1>당신의 성향에 맞는 캐릭터는?</h1>
          <ImgDiv>
            <img id="createdImg" src={imageUrl} alt="DALLE" />
          </ImgDiv>
        </DescDiv>
      )}
    </>
  );
};

export default Detail;
