import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TasteDivNight,
  TasteBodyNight,
  CompleteBtnNight,
} from "./MyTasteStyle";

const MyTasteNight = () => {
  const [data, setData] = useState("");
  const [tastePick, setTastePick] = useState([
    "3D",
    "render",
    "character",
    "that",
    "is",
  ]);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await fetch("http://dall2.site:8888/hello").then((res) =>
          res.json()
        );
        setData(fetchData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(data);

  const onClickBtn = (e) => {
    const value = e.target.value;

    tastePick.length <= 9
      ? setTastePick([value, ...tastePick])
      : alert("5개 이상을 고를 수 없습니다!");
    setClick(!click);
  };
  console.log("in taste:", tastePick);

  const onSubmitTaste = async (e) => {
    e.preventDefault();
    navigate("/detail", { state: { tastePick } });
  };

  return (
    <TasteDivNight>
      <h1>나의 선택은?</h1>
      <p>최대 5개까지 선택이 가능해요.</p>
      <form onSubmit={onSubmitTaste}>
        <TasteBodyNight>
        <input type="button" value="Creative" onClick={onClickBtn} />
          <input type="button" value="Quiet" onClick={onClickBtn} />
          <input type="button" value="Outgoing" onClick={onClickBtn} />
          <input type="button" value="Friendly" onClick={onClickBtn} />
          <input type="button" value="Practical" onClick={onClickBtn} />
          <input type="button" value="Talented" onClick={onClickBtn} />
          <input type="button" value="Supportive" onClick={onClickBtn} />
          <input type="button" value="Prickly" onClick={onClickBtn} />
          <input type="button" value="Bossy" onClick={onClickBtn} />
          <input type="button" value="Capricious" onClick={onClickBtn} />
          <input type="button" value="Reliable" onClick={onClickBtn} />
          <input type="button" value="Honest" onClick={onClickBtn} />
          <input type="button" value="Play" onClick={onClickBtn} />
          <input type="button" value="Helpful" onClick={onClickBtn} />
          <input type="button" value="Unfriendly" onClick={onClickBtn} />
          <input type="button" value="Extraveted" onClick={onClickBtn} />
          <input type="button" value="Introverted" onClick={onClickBtn} />
        </TasteBodyNight>
        <CompleteBtnNight type="submit" value="모두 선택했어요 !" />
      </form>
    </TasteDivNight>
  );
};

export default MyTasteNight;
