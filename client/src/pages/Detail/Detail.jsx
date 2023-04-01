import React, { useState, useEffect } from "react";
import { DescDiv, ImgDiv, ShareDiv } from "./DetailStyle";

const Detail = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'something string' })
    };
    
    fetch("http://localhost:8000/test", requestOptions)
      .then(response => response.json())
      .then(data => setImageUrl(data))
      .catch(error => console.log(error));
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
