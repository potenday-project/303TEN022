import React from "react";
import { LoadingNightDiv } from "./LoadingStyle";
import DALLE1 from "../../images/DALLE1.png";
// import SyncLoader from "react-spinners/SyncLoader";

const LoadingNight = () => {
  return (
    <LoadingNightDiv>
      <h1>분석중</h1>
      <div id="loadingMain">
        {/* <SyncLoader color="#FF94D1" /> */}
        <div id="img">
          <img src={DALLE1} alt="dalle1" />
        </div>
      </div>
    </LoadingNightDiv>
  );
};

export default LoadingNight;
