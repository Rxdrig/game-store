import { getJuegosByPlataform } from "../helpers/GetJuegosByPlataform";
import { JuegoCard } from "./JuegoCard";



export const JuegoList = ({ plataforma }) => {

    const juegos = getJuegosByPlataform(plataforma);

  return (
    <>
        <h1>JuegoList</h1>
        <div className="container">
            <div className="col-md-8 offset-md-2">
             {
                juegos.map(aux => (
                    <JuegoCard key={aux.id} {...aux}/>
                ))
             }   
            </div>
        </div>
    </>
  )
}
