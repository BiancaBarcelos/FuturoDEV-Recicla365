import { Link } from "react-router-dom";
import "../../index.css"
import "./style.css"
import { useContext } from "react";
import { LocaisColetaContext } from "../../context/LocaisColetaContext";

function ListaLocaisColeta() {

   const {locaisColeta} = useContext(LocaisColetaContext)

   return(
    <div>
      {
         locaisColeta.map(localColeta => {
            
            return (
               <div key={localColeta.id} className="listaLocais container">
                  <p>{localColeta.nomeLocal} - {localColeta.bairro} - {localColeta.cidade}</p>
                  <div>
                     {
                        localColeta.residuos && localColeta.residuos.map((residuo,index)=>{
                           console.log(index)
                           return(
                              <span key={localColeta.id}>{residuo} {(localColeta.residuos.length - 1) !== index ? " | " : ""}</span>
                           )
                        })
                     }
                  </div>
                  <div className="iconsAcao">
                     <a href=""><img src="./src/assets/lupa.png" alt="" /></a>
                     <a href=""><img src="./src/assets/editar.png" alt="" /></a>
                     <a href=""><img src="./src/assets/lixeira.png" alt="" /></a>
                  </div>
               </div>
            )
         })
      }
      
    </div>
   )
  }

export default ListaLocaisColeta;