import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Sessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const getSessions = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes"
    );

    getSessions.then((sessions) => {
      setSessions(sessions.data.days);
    });
  }, []);
  console.log(sessions);
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
                <button>{times.name}</button>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
