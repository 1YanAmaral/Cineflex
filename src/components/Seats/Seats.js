import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Seats() {
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
  console.log(seats);

  return (
    <div className="page">
      <div className="title">Selecione o(s) assento(s)</div>
      {seats.map((seat) =>
        seat.isAvailiable ? (
          <div></div>
        ) : (
          <div className="poster">{seat.name}</div>
        )
      )}
    </div>
  );
}
