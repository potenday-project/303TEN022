import styled from "styled-components";

export const PopupDiv = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans";

  width: 393px;
  height: 852px;

  margin: 30px auto;

  background-color: blanchedalmond;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 40px;
  }

  box-shadow: 0px -1px 15px -1px rgba(0, 0, 0, 0.13);
`;

export const ImgDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  align-items: start;
  align-content: space-between;
  justify-items: center;

  width: 320px;
  height: 600px;

  overflow-y: scroll;
  margin-left: 5px;

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 5px;
  }

  :hover {
    ::-webkit-scrollbar {
      visibility: visible;
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: blanchedalmond;
    }

    ::-webkit-scrollbar-thumb {
      height: 10%;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    }
  }

  gap: 30px;

  #img {
    display: flex;
    flex-direction: column;

    img {
      width: 130px;
      height: 130px;

      margin-bottom: 10px;
    }

    p {
      width: 130px;

      margin-bottom: 20px;
      text-align: center;
    }
  }
`;

// night style

export const PopupDivNight = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans";

  width: 393px;
  height: 852px;

  margin: 30px auto;

  /* background-color: blanchedalmond; */

  background-color: #000;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 40px;
  }
`;

export const ImgNight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  align-items: start;
  align-content: space-between;
  justify-items: center;

  width: 320px;
  height: 600px;

  overflow-y: scroll;
  margin-left: 5px;

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 5px;
  }

  :hover {
    ::-webkit-scrollbar {
      visibility: visible;
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #000;
    }

    ::-webkit-scrollbar-thumb {
      height: 10%;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
    }
  }

  gap: 30px;

  #img {
    display: flex;
    flex-direction: column;

    img {
      width: 130px;
      height: 130px;

      margin-bottom: 10px;
    }

    p {
      width: 130px;

      margin-bottom: 20px;
      text-align: center;
    }
  }
`;
