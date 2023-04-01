import React from "react";
import { LoadingDiv } from "./LoadingStyle";

import SyncLoader from "react-spinners/SyncLoader";

const Loading = () => {
  return (
    <LoadingDiv>
      <h1>분석중</h1>

      <SyncLoader color="#FF94D1" />
      <div id="loadingMain"></div>
    </LoadingDiv>
  );
};

export default Loading;
