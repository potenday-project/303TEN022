import React from "react";
import { DescDiv, ImgDiv, ShareDiv } from "./DetailStyle";
import DALLE1 from "../../images/DALLE1.png";
// import Instagram from "../../images/instagram.png";
// import Kakao from "../../images/kakao.png";
// import Twitter from "../../images/twitter.png";
// import Share from "../../images/share.png";
// import { useNavigate } from "react-router-dom";

const Detail = () => {
  // const navigator = useNavigate();

  // const onClickShowAll = () => {
  //   navigator("/popup");
  // };
  return (
    <DescDiv>
      <h1>IT기업 감성 UX라이터</h1>
      <ImgDiv>
        <img id="createdImg" src={DALLE1} alt="DALLE" />
      </ImgDiv>
      {/* <p id="desc">
        ipsum lorem ipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum
        loremipsum loremipsum loremipsum lorem loremipsum loremlorem ipsum
        loremlorem i
      </p>

      <button onClick={onClickShowAll}>전체 유형 보기</button>
      <p id="shareText">공유하기</p>
      <ShareDiv>
        <img src={Instagram} alt="Instagram" />
        <img src={Kakao} alt="Kakao" />
        <img src={Twitter} alt="Twitter" />
        <img src={Share} alt="Share" />
      </ShareDiv> */}
    </DescDiv>
  );
};

export default Detail;
