import React from "react";
import { LoadingNightDiv } from "./LoadingStyle";
import DALLE1 from "../../images/DALLE1.png";
import Analsis from "../../images/Analsis....png";
// import SyncLoader from "react-spinners/SyncLoader";

const LoadingNight = () => {
  return (
    <LoadingNightDiv>
      <h1>분석중</h1>
      <div id="loadingMain">
        {/* <SyncLoader color="#FF94D1" /> */}
        {/* <div id="img">
          <img id="loadingImg" src={DALLE1} alt="dalle1" />
        </div> */}
        <img id="analsis" src={Analsis} alt="Analsis" />
      </div>
    </LoadingNightDiv>
  );
};

export default LoadingNight;
