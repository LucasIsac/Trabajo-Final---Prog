import { NavLink } from "react-router-dom";
import "./Carta.css";

const Cartas = () => {
  return (
    <div className='card'>
        <img
        src="img/Buenos Aires.jpg"
        alt="Acogedor monoambiente"
        className="card-image"
      />
      <div className="card-content">
        <h2>Acogedor monoambiente La Plata centro</h2>
        <div className="card-location">
          <a href="https://maps.app.goo.gl/5CF4brW67XEiSHYz9">La Plata</a>
          <span> · a 300 m del centro</span>
        </div>
        <span className="recommended">Recomendado para tu grupo</span>
        <p>
          <strong>Apartamento con balcón</strong><br />
          Apartamento entero · 1 dormitorio · 1 sala de estar · 1 baño · 1 cocina · 36m²
        </p>
        <p>2 camas (1 doble, 1 doble grande)</p>
        <div className="card-footer">
          <div className="rating">
            <span className="rating-score">9,8</span>
            <span>Excepcional</span>
            <small>(97 comentarios)</small>
          </div>
          <div className="price">
            <span>$614.219</span>
            <small>Incluye impuestos y cargos</small>
          </div>
        </div>
        <NavLink to="/Formulario" className="availability-button">Ver disponibilidad</ NavLink>
      </div>
    </div>
  )
}

export default Cartas