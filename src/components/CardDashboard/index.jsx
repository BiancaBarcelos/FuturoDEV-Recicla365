import { useContext } from "react";
import { LocaisColetaContext } from "../../context/LocaisColetaContext";
import { UsuariosContext } from "../../context/UsuariosContext";
import "../../index.css"
import "./style.css"

function CardDashboard() {

  const {locaisColeta} = useContext(LocaisColetaContext)
  const {usuarios} = useContext(UsuariosContext)

  
  return(
  <>
    <div className="card">
    <h2>{usuarios.length}</h2>
    <p>Usuários Ativos</p>
    </div>
    <div className="card">
    <h2>{locaisColeta.length}</h2>
    <p>Locais Cadastrados</p>
    </div>
  </>
  )
}

export default CardDashboard;