import React from "react";
import { Link } from "react-router-dom";
import { MainDivNight, ImgDivNight } from "./HomeStyle";
import DALLE1 from "../../images/DALLE1.png";

const HomeNight = () => {
  return (
    <MainDivNight>
      <h1>천직 찾기 테스트</h1>
      <p id="titleDesc">수 많은 기업 중에 나랑 딱 맞는 기업찾기</p>
      <ImgDivNight>
        <img src={DALLE1} alt="main-img" />
      </ImgDivNight>
      <Link to="/mytaste">
        <button>테스트 시작하기</button>
      </Link>
      <p id="startDesc">현재 n 명이 시작했어요 !</p>
    </MainDivNight>
  );
};

export default HomeNight;
