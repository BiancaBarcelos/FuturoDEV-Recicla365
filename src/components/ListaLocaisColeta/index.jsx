import { Link } from "react-router-dom";
import "../../index.css"
import "./style.css"

function ListaLocaisColeta() {

  
   return(
    <div>
      
      <div className="listaLocais container">
         <p>Nome Local - Bairro - Cidade</p>
         <p>Residuos Aceitos | Residuos Aceitos | Residuos Aceitos</p>
         <div className="iconsAcao">
            <a href=""><img src="./src/assets/lupa.png" alt="" /></a>
            <a href=""><img src="./src/assets/editar.png" alt="" /></a>
            <a href=""><img src="./src/assets/lixeira.png" alt="" /></a>
         </div>
      </div>
      
    </div>
   )
  }

export default ListaLocaisColeta;