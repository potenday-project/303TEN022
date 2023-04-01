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

    margin-bottom: 20px;
  }

  #loadingMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #img {
      width: 340px;
      height: 340px;

      background-color: #fff;
      border: 1px solid #000;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 316px;
        height: 316px;

        animation: 180deg 6s linear infinite;

        border: 1px solid #000;
      }

      margin-bottom: 0px;
    }

    span {
      width: 100px;

      margin-bottom: 250px;

      display: flex;

      justify-content: center;
      align-items: center;

      span {
        margin-right: 50px;
      }
    }
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
    z-index: 6;
    font-size: 40px;
    font-weight: 900;

    margin-bottom: 0px;
  }

  #loadingMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #img {
      /* position: absolute;
      z-index: 3; */

      width: 326px;
      height: 326px;

      background: linear-gradient(135deg, #85fff8 0%, #cf0076 64.58%);

      display: flex;
      justify-content: center;
      align-items: center;

      #loadingImg {
        width: 316px;
        height: 316px;

        animation: 180deg 6s linear infinite;
      }

      margin-bottom: 0px;
    }

    #analsis {
      /* margin-top: 320px; */
      margin-left: 280px;
    }

    span {
      position: relative;
      z-index: 4;
      width: 100px;

      margin-bottom: 250px;

      display: flex;

      justify-content: center;
      align-items: center;

      span {
        margin-right: 50px;
      }
    }
  }

  box-shadow: 0px -1px 15px -1px rgba(0, 0, 0, 0.13);
`;
