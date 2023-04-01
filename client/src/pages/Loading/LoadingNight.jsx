import React from "react";
import { LoadingNightDiv } from "./LoadingStyle";

import Analsis from "../../images/Analsis....png";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingNight = () => {
  return (
    <LoadingNightDiv>
      <h1>분석중</h1>
      <div id="loadingMain">
        {/* <div id="img">
          <img id="loadingImg" src={DALLE1} alt="dalle1" />
        </div> */}
        <img id="analsis" src={Analsis} alt="Analsis" />
      </div>
      <SyncLoader color="#FF94D1" />
    </LoadingNightDiv>
  );
};

export default LoadingNight;
