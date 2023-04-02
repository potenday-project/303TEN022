import React from "react";
import { Link } from "react-router-dom";
import { MainDiv, ImgDiv } from "./HomeStyle";
import DALLE2 from "../../images/DALLE2.png";
import Ellipse1 from "../../images/Ellipse1.png";
import Ellipse2 from "../../images/Ellipse2.png";
import Ellipse3 from "../../images/Ellipse3.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import Vector3 from "../../images/Vector3.png";
import Black1 from "../../images/Black1.png";
import Black2 from "../../images/Black2.png";

const Home = () => {
  return (
    <MainDiv>
      <h1>나만의 캐릭터 찾기</h1>
      <ImgDiv>
        <div id="sparkleDiv">
          <div>
            <img id="ellipse1" src={Ellipse1} alt="ellipse1" />
            <img id="black1" src={Black1} alt="black1" />
          </div>
          <img id="vector2" src={Vector2} alt="vector2" />
          <img id="ellipse2" src={Ellipse2} alt="ellipse2" />
          <img id="vector1" src={Vector1} alt="vector1" />
          <div>
            <img id="ellipse3" src={Ellipse3} alt="ellipse3" />
            <img id="black2" src={Black2} alt="black2" />
          </div>
          <img id="vector3" src={Vector3} alt="vector3" />
        </div>
        <img id="mainImg" src={DALLE2} alt="main-img" />
      </ImgDiv>

      <Link to="/mytaste">
        <button>테스트 시작하기</button>
      </Link>
      <p id="startDesc">현재 n 명이 시작했어요 !</p>
    </MainDiv>
  );
};

export default Home;
