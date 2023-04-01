import styled from "styled-components";

export const TasteDiv = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans";

  width: 393px;
  height: 852px;

  margin: 30px auto;

  background-color: #fff;
  color: #000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px -1px 15px -1px rgba(0, 0, 0, 0.13);

  h1 {
    font-size: 40px;
    color: #1d4489;
  }

  p {
    font-size: 15px;
    margin-top: 6px;
    margin-bottom: 61px;
    color: #1d4489;
  }
`;

export const TasteBody = styled.div`
  box-sizing: border-box;

  width: 316px;
  height: 481px;

  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  align-content: flex-start;

  gap: 5px;

  input {
    box-sizing: border-box;

    height: 45px;
    padding: 10px 20px;
    margin-bottom: 10px;
    margin-right: 5px;

    color: #1d4489;
    font-size: 18px;

    border-radius: 30px;
    border: 1px solid #f7008d;
    background-color: #fff;

    cursor: pointer;

    :focus,
    :active,
    :hover {
      background-color: #ff94d1;
      color: #1d4489;
      border: 1px solid #000;
    }
  }
`;

export const CompleteBtn = styled.input`
  width: 316px;
  height: 66px;

  margin-top: 40px;

  border-radius: 50px;
  border: 1px solid #f7008d;
  font-size: 18px;
  color: #1d4489;

  background-color: #fff;

  cursor: pointer;

  :focus,
  :active,
  :hover {
    background-color: #ff94d1;
    color: #1d4489;
    border: 1px solid #000;
  }
`;

// night version styled-components

export const TasteDivNight = styled.div`
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
    font-size: 40px;
  }

  p {
    margin-top: 6px;
    margin-bottom: 61px;
  }
`;

export const TasteBodyNight = styled.div`
  box-sizing: border-box;

  width: 316px;
  height: 450px;

  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: flex-start;
  align-content: flex-start;

  gap: 5px;

  input {
    box-sizing: border-box;

    height: 45px;
    padding: 5px 15px;
    margin-bottom: 10px;
    margin-right: 5px;

    font-size: 18px;
    color: #85fff8;
    background-color: transparent;

    border-radius: 30px;
    border: 3px solid #85fff8;

    cursor: pointer;

    :focus,
    :active,
    :hover {
      background: linear-gradient(180deg, #c70180 0%, #5101ec 100%);
      color: #fff;
      border: 3px solid #85fff8;
    }
  }
`;

export const CompleteBtnNight = styled.input`
  width: 316px;
  height: 66px;

  margin-top: 40px;

  border-radius: 50px;
  border: 1px solid #85fff8;
  font-size: 18px;
  color: #fff;

  background: transparent;

  cursor: pointer;
`;
