import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";

export default function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getSessions = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`
    );

    getSessions.then((sessions) => {
      setSessions(sessions.data.days);
      setSelectedMovie(sessions.data);
    });
  }, []);

  console.log(selectedMovie);

  return (
    <div className="page">
      <div className="title">Selecione o horário</div>
      <div className="sessions">
        {sessions.map((session, index) => (
          <>
            <div className="weekday">
              {session.weekday} - {session.date}
            </div>
            <div className="showtimes">
              {session.showtimes.map((times) => (
                <Link to={`/assentos/${times.id}`}>
                  <button>{times.name}</button>
                </Link>
              ))}
            </div>
          </>
        ))}
      </div>
      <Footer thumb={selectedMovie.posterURL} title={selectedMovie.title} />
    </div>
  );
}
