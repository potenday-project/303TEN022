import React from "react";
import { LoadingNightDiv } from "./LoadingStyle";
import Analsis from "../../images/Analsis....png";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingNight = () => {
  return (
    <LoadingNightDiv>
      <h1>분석중</h1>
      <div id="loadingMain">
        <img id="analsis" src={Analsis} alt="Analsis" />
        <SyncLoader color="#85fff8" />
      </div>
    </LoadingNightDiv>
  );
};

export default LoadingNight;
