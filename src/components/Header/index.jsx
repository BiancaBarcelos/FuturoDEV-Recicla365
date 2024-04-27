import { Link } from "react-router-dom"

function Header(){

    return (
        <div className='menu'>
            <div>
                <div><Link to="/">Recicla365</Link></div>
                <nav>
                    <ul>
                        <li><Link to="/locais">LOCAIS DE COLETA</Link></li>
                        <li><Link to="/cadastrolocais">CADASTRAR LOCAIS</Link></li>
                        <li><Link to="/login">SAIR</Link></li> 
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;