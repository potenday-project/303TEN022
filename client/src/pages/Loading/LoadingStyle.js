import styled from "styled-components";

export const LoadingDiv = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans";

  width: 393px;
  height: 852px;

  margin: 30px auto;

  background: #ff94d199;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;

  h1 {
    font-size: 40px;
    font-weight: 900;
  }

  span {
    width: 100px;

    margin-bottom: 0px;

    display: flex;

    justify-content: center;
    align-items: center;
  }
  box-shadow: 0px -1px 15px -1px rgba(0, 0, 0, 0.13);
`;

// night styles

export const LoadingNightDiv = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans";

  width: 393px;
  height: 852px;

  margin: 30px auto;

  background-color: #000;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;

  h1 {
    position: absolute;
    z-index: 12;
    font-size: 40px;
    font-weight: 900;

    margin-bottom: 0px;
  }

  #loadingMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #analsis {
      position: absolute;
      z-index: 13;
      margin-top: 320px;
      margin-left: 280px;
    }

    span {
      position: relative;
      z-index: 11;
      width: 100px;

      margin-top: 100px;

      display: flex;

      justify-content: center;
      align-items: center;
    }
  }

  box-shadow: 0px -1px 15px -1px rgba(0, 0, 0, 0.13);
`;
