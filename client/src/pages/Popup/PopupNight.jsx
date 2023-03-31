import React from "react";
import { PopupDivNight, ImgNight } from "./PopupStyle";
import Dummy from "../../images/dummy.png";

const PopupNight = () => {
  return (
    <PopupDivNight>
      <h1>전체 유형 보기</h1>
      <ImgNight>
        <div id="img">
          <img src={Dummy} alt="dummy" />
          <p>
            분석적인
            <br /> 데이터애널리스트
          </p>
        </div>
        <div id="img">
          <img src={Dummy} alt="dummy" />
          <p>
            논리적인
            <br /> 백엔드 개발자
          </p>
        </div>
        <div id="img">
          <img src={Dummy} alt="dummy" />
          <p>
            트렌디한
            <br />
            UI 디자이너
          </p>
        </div>
        <div id="img">
          <img src={Dummy} alt="dummy" />
          <p>다재다능한 PM</p>
        </div>
        <div id="img">
          <img src={Dummy} alt="dummy" />
          <p>
            커뮤니케이션의 신<br /> 마케터
          </p>
        </div>
        <div id="img">
          <img src={Dummy} alt="dummy" />
          <p>
            창의적인 <br />
            프론트엔드 개발자
          </p>
        </div>
        <div id="img">
          <img src={Dummy} alt="dummy" />
          <p>꼼꼼한 QA</p>
        </div>
        <div id="img">
          <img src={Dummy} alt="dummy" />
          <p>전략적인 MD</p>
        </div>
      </ImgNight>
    </PopupDivNight>
  );
};

export default PopupNight;
