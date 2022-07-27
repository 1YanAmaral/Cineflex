import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";



export default function MovieOptions() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

    getMovies.then(movies => {setMovies(movies.data)});
  }, []);

  console.log(movies)

  return (
    <div className="page">
      <div className="title">Selecione o filme</div>
      <div className="screening">
        {movies.map((poster) => (
          <div className="poster">
            <img src={poster.posterURL} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
