import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Seat({ name }) {
  const [selected, setSelected] = useState("seat");

  return selected === "seat" ? (
    <div className={selected} onClick={() => setSelected("seat selected")}>
      {name}
    </div>
  ) : (
    <div className={selected} onClick={() => setSelected("seat")}>
      {name}
    </div>
  );
}

export default function Seats() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [seats, setSeats] = useState([]);
  const { sessionId } = useParams();

  useEffect(() => {
    const getSeats = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`
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

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [ids, setIds] = useState([]);

  function reserveSeats(event) {
    event.preventDefault();

    const request = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      {
        ids,
        name,
        cpf,
      }
    );
  }
  //lançar um props pros assentos não selecionarem todos de uma vez
  return (
    <div className="page">
      <div className="title">Selecione o(s) assento(s)</div>
      <div className="seats">
        {seats.map((seat) =>
          seat.isAvailable ? (
            <Seat name={seat.name} />
          ) : (
            <div
              className="seat unavailable"
              onClick={() => alert("Esse assento não está disponível")}
            >
              {seat.name}
            </div>
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
          <div className="seat unavailable"></div>
          Indisponível
        </div>
      </div>
      <form onSubmit={reserveSeats}>
        <div className="buyer">Nome do comprador:</div>
        <input
          type="name"
          value={name}
          placeholder="Digite seu nome..."
          onChange={() => {
            setName("");
          }}
          required
        ></input>
        <div className="buyer">CPF do comprador:</div>
        <input
          type="text"
          value={cpf}
          placeholder="Digite seu CPF..."
          onChange={() => {
            setCpf("");
          }}
          required
        ></input>
        <button type="submit" className="reserve">
          Reservar assento(s)
        </button>
      </form>
    </div>
  );
}
