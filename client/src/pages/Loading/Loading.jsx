import React from "react";
import { LoadingDiv } from "./LoadingStyle";
import DALLE1 from "../../images/DALLE1.png";
// import SyncLoader from "react-spinners/SyncLoader";

const Loading = () => {
  return (
    <LoadingDiv>
      <h1>분석중</h1>
      <div id="loadingMain">
        {/* <SyncLoader color="#FF94D1" /> */}
        <div id="img">
          <img src={DALLE1} alt="dalle1" />
        </div>
      </div>
    </LoadingDiv>
  );
};

export default Loading;
