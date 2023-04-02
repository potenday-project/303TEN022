import React, { useEffect, useState } from "react";
import { DescDivNight, ImgDivNight } from "./DetailStyle";
import { useLocation } from "react-router-dom";

const DetailNight = () => {
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

    fetch("http://localhost:8888/dalle", requestOptions)
      .then((response) => response.json())
      .then((data) => setImageUrl(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <DescDivNight>
      <h1>당신의 성향에 맞는 캐릭터는?</h1>

      {imageUrl && (
        <ImgDivNight>
          <img id="createdImg" src={imageUrl} alt="DALLE" />
        </ImgDivNight>
      )}
    </DescDivNight>
  );
};

export default DetailNight;
