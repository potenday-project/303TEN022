import styled from "styled-components";

export const DescDiv = styled.div`
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

  h1 {
    margin-top: 40px;
    margin-bottom: 20px;

    color: #1d4489;
  }

  #createdImg {
    width: 316px;
    height: 316px;

    border: 3px solid #1d4489;
  }

  #desc {
    width: 300px;
    height: 216px;

    font-size: 20px;

    margin-bottom: 20px;
  }

  button {
    width: 181px;
    height: 50px;

    border-radius: 50px;
    border: 1px solid #000;
    font-size: 18px;

    background-color: #fea1d2;

    margin-bottom: 26px;

    cursor: pointer;
  }

  #shareText {
    font-size: 18px;
    margin-bottom: 14px;
  }

  box-shadow: 0px -1px 15px -1px rgba(0, 0, 0, 0.13);
`;

export const ShareDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;

  img {
    cursor: pointer;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  width: 310px;
  height: 310px;
`;

// night style

export const DescDivNight = styled.div`
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

  h1 {
    margin-bottom: 20px;
  }

  #createdImg {
    width: 300px;
    height: 300px;
  }

  #desc {
    width: 300px;
    height: 200px;

    font-size: 18px;

    margin-bottom: 10px;
  }

  button {
    width: 181px;
    height: 60px;

    background: linear-gradient(180deg, #cf0076 0%, #4100fb 100%);

    border-radius: 50px;
    border: none;
    font-size: 18px;
    color: #fff;

    margin-bottom: 40px;

    cursor: pointer;
  }
`;

export const ShareDivNight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

export const ImgDivNight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  width: 310px;
  height: 310px;

  background: linear-gradient(135deg, #85fff8 0%, #cf0076 64.58%);
`;
