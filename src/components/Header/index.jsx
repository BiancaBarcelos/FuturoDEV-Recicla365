import { useContext } from "react";
import { Link } from "react-router-dom"
import { UsuariosContext } from "../../context/UsuariosContext";

function Header(){

    const {logout} = useContext(UsuariosContext);

    return (
        <div className='menu'>
            <div>
                <div><Link to="/">Recicla365</Link></div>
                <nav>
                    <ul>
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