import "./style.css";
import { useLocation, Link } from "react-router-dom";

function Assento({ seatNumber }) {
  return <div className="movie-info">Assento {seatNumber}</div>;
}

export default function Success() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="page">
        <div className="title success">Pedido feito com sucesso!</div>
        <div className="group">
          <div className="title-info">Filme e sessão</div>
          <div className="movie-title">{location.state.title}</div>
          <div className="movie-info">
            {location.state.day} {location.state.time}
          </div>
        </div>
        <div className="group">
          <div className="title-info">Ingressos</div>
          {location.state.seats.map((seat, index) => (
            <Assento key={index} seatNumber={seat} />
          ))}
        </div>
        <div className="group">
          <div className="title-info">Comprador</div>
          <div className="movie-info">
            <span>Nome: {location.state.name}</span>
            <span>CPF:{location.state.cpf}</span>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <button className="reserve">Voltar pra home</button>
      </Link>
    </>
  );
}
