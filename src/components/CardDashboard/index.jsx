import { useContext } from "react";
import { LocaisColetaContext } from "../../context/LocaisColetaContext";
import { UsuariosContext } from "../../context/UsuariosContext";
import "../../index.css"
import "./style.css"
import { Link } from "react-router-dom";

function CardDashboard() {

  const {locaisColeta} = useContext(LocaisColetaContext)
  const {usuarios} = useContext(UsuariosContext)

  
  return(
  <>
    <Link to="/listagemUsuarios" className="card">
    <h2>{usuarios.length}</h2>
    <p>Usuários Ativos</p>
    </Link>
    <Link to="/locais" className="card">
    <h2>{locaisColeta.length}</h2>
    <p>Locais Cadastrados</p>
    </Link>
  </>
  )
}

export default CardDashboard;