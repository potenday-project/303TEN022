import styled from "styled-components";

export const MainDiv = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans";

  width: 393px;
  height: 852px;

  margin: 30px auto;

  background-color: #fff;

  /* background-color: #000;
  color: #fff; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 40px;
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 30px;
  }

  button {
    margin-top: 49px;
    width: 316px;
    height: 66px;

    border-radius: 50px;
    border: none;
    font-size: 20px;

    background-color: #ff94d1;

    cursor: pointer;
  }

  #startDesc {
    margin-top: 16px;
    font-size: 20px;
  }

  box-shadow: 0px -1px 15px -1px rgba(0, 0, 0, 0.13);
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 393px;
  height: 500px;

  #mainImg {
    position: absolute;
    z-index: 6;
  }

  #sparkleDiv {
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;

    width: 393px;
    height: 500px;

    #ellipse1 {
      position: relative;
      z-index: 4;
      margin-top: -20px;
      margin-bottom: -20px;

      width: 20px;
      height: 45px;
    }

    #black1 {
      position: absolute;
      z-index: 3;
      margin-top: -7px;
      margin-left: -20px;
      margin-bottom: -20px;

      width: 20px;
      height: 45px;
    }

    #vector2 {
      margin-left: 300px;
    }

    #ellipse2 {
      margin-top: 50px;
      margin-left: 370.5px;
    }

    #vector1 {
      margin-top: 25px;
      margin-left: 60px;
    }

    #ellipse3 {
      position: relative;
      z-index: 4;
      margin-top: 150px;
      margin-left: 30px;

      width: 45px;
      height: 45px;
    }

    #black2 {
      position: absolute;
      z-index: 3;

      margin-top: 150px;
      margin-left: -48.5px;

      width: 45px;
      height: 45px;
    }

    #vector3 {
      margin-top: 30px;
      margin-left: 350px;
    }
  }
`;

// night style

export const MainDivNight = styled.div`
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

  h1,
  p {
    text-align: center;
  }

  h1 {
    font-size: 40px;
    font-weight: 900;
  }

  #titleDesc {
    margin-bottom: 61px;
  }

  img {
    width: 316px;
    height: 316px;
  }

  button {
    margin-top: 104px;
    width: 316px;
    height: 66px;

    background: linear-gradient(180deg, #cf0076 0%, #4100fb 100%);

    border-radius: 50px;
    border: none;
    font-size: 20px;
    color: #fff;

    cursor: pointer;
  }

  #startDesc {
    margin-top: 16px;
    font-size: 20px;
  }
`;

export const ImgDivNight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 326px;
  height: 326px;

  background: linear-gradient(135deg, #85fff8 0%, #cf0076 64.58%);
`;
