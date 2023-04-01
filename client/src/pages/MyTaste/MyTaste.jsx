import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TasteDiv, TasteBody, CompleteBtn } from "./MyTasteStyle";

const MyTaste = () => {
  const [tastePick, setTastePick] = useState(["3D", "render", "that", "is"]);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const onClickBtn = (e) => {
    const value = e.target.value;

    tastePick.length <= 8
      ? setTastePick([...tastePick, value])
      : alert("5개 이상을 고를 수 없습니다!");
    setClick(!click);
  };
  console.log("in taste:",tastePick);

  const onSubmitTaste = async (e) => {
    e.preventDefault();
    navigate("/detail", { state: { tastePick } });
  };

  return (
    <TasteDiv>
      <h1>나의 성향은 ?</h1>
      <p>최대 5개까지 선택이 가능해요.</p>
      <form onSubmit={onSubmitTaste}>
        <TasteBody>
          <input type="button" value="space" onClick={onClickBtn} />
          <input type="button" value="company" onClick={onClickBtn} />
          <input type="button" value="typescript" onClick={onClickBtn} />
          <input type="button" value="home" onClick={onClickBtn} />
          <input type="button" value="work" onClick={onClickBtn} />
          <input type="button" value="co-working space" onClick={onClickBtn} />
          <input type="button" value="introvert" onClick={onClickBtn} />
          <input type="button" value="extrovert" onClick={onClickBtn} />
          <input type="button" value="exercise" onClick={onClickBtn} />
          <input type="button" value="e-learing" onClick={onClickBtn} />
          <input type="button" value="coffee" onClick={onClickBtn} />
          <input type="button" value="drawing" onClick={onClickBtn} />
          <input type="button" value="picture" onClick={onClickBtn} />
          <input type="button" value="tea" onClick={onClickBtn} />
          <input type="button" value="beer" onClick={onClickBtn} />
          <input type="button" value="cheese" onClick={onClickBtn} />
        </TasteBody>
        <CompleteBtn type="submit" value="모두 선택했어요 !" />
      </form>
    </TasteDiv>
  );
};

export default MyTaste;
