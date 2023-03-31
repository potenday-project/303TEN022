import React from "react";
import { DescDivNight, ImgDivNight, ShareDivNight } from "./DetailStyle";
import DALLE1 from "../../images/DALLE1.png";
import Instagram from "../../images/instagram.png";
import Kakao from "../../images/kakao.png";
import Twitter from "../../images/twitter.png";
import Share from "../../images/share.png";
import { useNavigate } from "react-router-dom";

const DetailNight = () => {
  const navigator = useNavigate();

  const onClickShowPopup = () => {
    navigator("/popup");
  };

  return (
    <DescDivNight>
      <h1>IT기업 감성 UX라이터</h1>
      <ImgDivNight>
        <img id="createdImg" src={DALLE1} alt="DALLE" />
      </ImgDivNight>
      <p id="desc">
        ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum lorem loremipsum loremlorem ipsum
        loremlorem i
      </p>

      <button onClick={onClickShowPopup}>전체 유형 보기</button>

      <ShareDivNight>
        <img src={Instagram} alt="Instagram" />
        <img src={Kakao} alt="Kakao" />
        <img src={Twitter} alt="Twitter" />
        <img src={Share} alt="Share" />
      </ShareDivNight>
    </DescDivNight>
  );
};

export default DetailNight;
