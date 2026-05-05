import { useNavigate, useParams } from "react-router-dom";
import { GetJuegoById } from "../helpers/GetJuegoById";


export const JuegoPage = () => {

    const {id} = useParams(); 
    const juego = GetJuegoById(id);
    const url = useNavigate();

    console.log("", juego);

    const handleReturn = () => {
        if (juego.plataforma === "Playstation") {
            url("/playstation");
        } else if (juego.plataforma === "Nintendo") {
            url('/nintendo');
        } else {
            url('/xbox');
        }
    }

    return (
    <>
    {
        juego ? (<div className="card">
            <img src={`/assets/juegos/${juego.id}.jpg`} alt={juego.nombre} className="card-img-top" />
            <div className="card-body">
            <p className="card-text">{juego.tipo}</p>
            <p className="card-text">{juego.precio}</p>
            <p className="card-text">{juego.descripcion}</p>
            </div>
            <div className="button-container">
                <button className="btn btn-primary" onClick={handleReturn}>Volver</button>
            </div>
        </div>) : (
            <h1>El juego no existe</h1>
        )
    }

    </>
  )
}

