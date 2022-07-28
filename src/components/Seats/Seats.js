import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Seats() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [seats, setSeats] = useState([]);
  const { sessionId } = useParams();

  useEffect(() => {
    const getSeats = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`
    );

    getSeats.then((seats) => {
      setSeats(seats.data.seats);
    });
  }, []);

  //   useEffect(() => { Vai pro Footer
  //     const getSelectedMovie = axios.get(
  //       `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`
  //     );

  //     getSelectedMovie.then((movie) => {
  //       setSelectedMovie(movie.data);
  //     });
  //   }, []);
  console.log(seats);

  return (
    <div className="page">
      <div className="title">Selecione o(s) assento(s)</div>
      <div className="seats">
        {seats.map((seat) =>
          seat.isAvailiable ? (
            <div className="seat">{seat.name}</div>
          ) : (
            <div className="seat unavailiable">{seat.name}</div>
          )
        )}
      </div>
      <div className="colorcode">
        <div className="code">
          <div className="seat selected"></div>
          Selecionado
        </div>
        <div className="code">
          <div className="seat"></div>
          Disponível
        </div>
        <div className="code">
          <div className="seat unavailiable"></div>
          Indisponível
        </div>
      </div>
      <div className="buyer">Nome do comprador:</div>
      <input placeholder="Digite seu nome..."></input>
      <div className="buyer">CPF do comprador:</div>
      <input placeholder="Digite seu CPF..."></input>
      <button>Reservar assento(s)</button>
    </div>
  );
}
