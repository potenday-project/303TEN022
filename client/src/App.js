import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyTaste from "./pages/MyTaste/MyTaste";
import MyTasteNight from "./pages/MyTaste/MyTasteNight";
import Detail from "./pages/Detail/Detail";
import Loading from "./pages/Loading/Loading";
import HomeNight from "./pages/Home/HomeNight";
import DetailNight from "./pages/Detail/DetailNight";
import LoadingNight from "./pages/Loading/LoadingNight";
import Popup from "./pages/Popup/Popup";
import PopupNight from "./pages/Popup/PopupNight";

function App() {
  const today = new Date();
  const hour = today.getHours();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={hour >= 6 && hour < 18 ? <Home /> : <HomeNight />}
        />
        <Route
          path="/mytaste"
          element={hour >= 6 && hour < 18 ? <MyTaste /> : <MyTasteNight />}
        />
        <Route
          path="/loading"
          element={hour >= 6 && hour < 18 ? <Loading /> : <LoadingNight />}
        />
        <Route
          path="/detail"
          element={hour >= 6 && hour < 18 ? <Detail /> : <DetailNight />}
        />
        <Route
          path="/popup"
          element={hour >= 6 && hour < 18 ? <Popup /> : <PopupNight />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
