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
    /* position: absolute; */
    font-size: 40px;
    font-weight: 900;

    margin-bottom: 153px;
  }

  #loadingMain {
    /* position: absolute; */
    /* z-index: 6; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #img {
      position: absolute;
      z-index: 3;

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

        border: 1px solid #000;
      }

      margin-bottom: 250px;
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

// night style
export const LoadingNightDiv = styled.div`
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
    /* position: absolute; */
    font-size: 40px;
    font-weight: 900;

    margin-bottom: 153px;
  }

  #loadingMain {
    /* position: absolute; */
    /* z-index: 6; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #img {
      position: absolute;
      z-index: 3;

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

        border: 1px solid #000;
      }

      margin-bottom: 250px;
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
