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
      {hour >= 6 && hour < 18 ? (
        <Routes>
          <Route path="/" element={<HomeNight />} />
          <Route path="/mytaste" element={<MyTasteNight />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/detail" element={<DetailNight />} />
          <Route path="/popup" element={<Popup />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mytaste" element={<MyTaste />} />
          <Route path="/loading" element={<LoadingNight />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/popup" element={<PopupNight />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
