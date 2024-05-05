import { useContext } from "react";
import { Link } from "react-router-dom"
import { UsuariosContext } from "../../context/UsuariosContext";
import "../../index.css"
import "./style.css"


function Header(){

    const {logout} = useContext(UsuariosContext);

    return (
        <div className="bgMenu">
            <div className="menu container">
                <div><Link to="/dashboard"><img src="./src/assets/logo_recicla.svg" alt="" /></Link></div>
                <nav>
                    <ul>
                        <li><Link to="/listagemUsuarios">USUÁRIOS</Link></li>
                        <li><Link to="/locais">LOCAIS DE COLETA</Link></li>
                        <li><Link to="/cadastrolocais">CADASTRAR LOCAIS</Link></li>
                        <li><Link onClick={logout}>SAIR</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;