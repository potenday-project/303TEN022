import React, { useEffect, useState } from "react";
import { DescDivNight, ImgDivNight } from "./DetailStyle";
import { useLocation } from "react-router-dom";
import LoadingNight from "../Loading/LoadingNight";

const DetailNight = () => {
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
        <LoadingNight />
      ) : (
        <DescDivNight>
          <h1>당신의 성향에 맞는 캐릭터는?</h1>
          <ImgDivNight>
            <img id="createdImg" src={imageUrl} alt="DALLE" />
          </ImgDivNight>
        </DescDivNight>
      )}
    </>
  );
};

export default DetailNight;
