import Header from "./Header/Header";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import MovieOptions from "./Movies/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessions from "./Sessions/Sessions";
import Seats from "./Seats/Seats";
import Success from "./Success/Success";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieOptions />} />
          <Route path="/sessoes/:movieId" element={<Sessions />} />
          <Route path="/assentos/:sessionId" element={<Seats />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
