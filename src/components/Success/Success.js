import "./style.css";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  return (
    <>
      <div className="page">
        <div className="title success">Pedido feito com sucesso!</div>
        <div className="group">
          <div className="title-info">Filme e sessão</div>
          <div className="movie-info">
            {location.state.title} {location.state.day} {location.state.time}
          </div>
        </div>
        <div className="group">
          <div className="title-info">Ingressos</div>
          <div className="movie-info">Assento {location.state.seats}</div>
        </div>
        <div className="group">
          <div className="title-info">Comprador</div>
          <div className="movie-info">
            {location.state.name} {location.state.cpf}
          </div>
        </div>
      </div>
      <button className="reserve">Voltar pra home</button>
    </>
  );
}
