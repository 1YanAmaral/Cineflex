import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Poster({ img }) {
  return (
    <div className="poster">
      <Link to="/sessoes">
        <img src={img} alt="" />
      </Link>
    </div>
  );
}

export default function MovieOptions() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    getMovies.then((movies) => {
      setMovies(movies.data);
    });
  }, []);

  return (
    <div className="page">
      <div className="title">Selecione o filme</div>
      <div className="screening">
        {movies.map((poster, index) => (
          <Poster key={index} img={poster.posterURL} />
        ))}
      </div>
    </div>
  );
}
