import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";

function Seat({ name, id, ids, setIds }) {
  const [selected, setSelected] = useState("seat");

  return selected === "seat" ? (
    <div
      className={selected}
      onClick={() => {
        setSelected("seat selected");
        setIds([...ids, id]);
        console.log(id, ids);
      }}
    >
      {name}
    </div>
  ) : (
    <div
      className={selected}
      onClick={() => {
        setSelected("seat");
        setIds(ids.filter((value) => value !== id));
        console.log(ids);
      }}
    >
      {name}
    </div>
  );
}

export default function Seats() {
  const [movie, setMovie] = useState({});
  const [seats, setSeats] = useState([]);
  const { sessionId } = useParams();

  useEffect(() => {
    const getSeats = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`
    );

    getSeats.then((seats) => {
      setSeats(seats.data.seats);
      setMovie(seats.data);
    });
  }, []);

  console.log(movie);

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

    console.log(name, cpf, ids);
  }

  return (
    <>
      <div className="page">
        <div className="title">Selecione o(s) assento(s)</div>
        <div className="seats">
          {seats.map((seat, index) =>
            seat.isAvailable ? (
              <Seat
                key={index}
                name={seat.name}
                id={seat.id}
                setIds={setIds}
                ids={ids}
              />
            ) : (
              <div
                key={index}
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
            onChange={(event) => setName(event.target.value)}
            required
          ></input>
          <div className="buyer">CPF do comprador:</div>
          <input
            type="text"
            value={cpf}
            placeholder="Digite seu CPF..."
            onChange={(event) => setCpf(event.target.value)}
            required
          ></input>
          <button type="submit" className="reserve">
            Reservar assento(s)
          </button>
        </form>
      </div>
      {movie.name ? (
        <Footer
          thumb={movie.movie.posterURL}
          title={movie.movie.title}
          day={movie.day.weekday}
          time={movie.name}
        />
      ) : (
        <></>
      )}
    </>
  );
}
