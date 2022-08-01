import "../../assets/css/reset.css";
import "./style.css";
import { useLocation, Link } from "react-router-dom";

function Assento({ seatNumber }) {
  return <div className="movie-info">Assento {seatNumber}</div>;
}

export default function Success() {
  const location = useLocation();
  const { name, cpf, seats, title, day, time } = location.state;

  return (
    <>
      <div className="page">
        <div className="title success">Pedido feito com sucesso!</div>
        <div className="group">
          <div className="title-info">Filme e sessão</div>
          <div className="movie-title">{title}</div>
          <div className="movie-info">
            {day} {time}
          </div>
        </div>
        <div className="group">
          <div className="title-info">Ingressos</div>
          {seats.map((seat, index) => (
            <Assento key={index} seatNumber={seat} />
          ))}
        </div>
        <div className="group">
          <div className="title-info">Comprador</div>
          <div className="movie-info">
            <span>Nome: {name}</span>
            <span>CPF:{cpf}</span>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <button className="reserve">Voltar pra home</button>
      </Link>
    </>
  );
}
