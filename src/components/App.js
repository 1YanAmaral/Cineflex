import Header from "./Header/Header";
import "../assets/css/style.css";
import MovieOptions from "./Movies/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessions from "./Sessions/Sessions";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieOptions />} />
          <Route path="/sessoes/:movieId" element={<Sessions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
