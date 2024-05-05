import { Link } from "react-router-dom";
import "../../index.css"
import "./style.css"
import { useContext } from "react";
import { LocaisColetaContext } from "../../context/LocaisColetaContext";
import ModalForm from "../ModalForm";
import { Button } from "@mui/material";

function ListaLocaisColeta({pageFrom}) {

   const {locaisColeta, removerLocal} = useContext(LocaisColetaContext)

   const deletaLocal = async(localColeta)=>{
      await removerLocal(localColeta)
    }

   return(
    <>
      {
         locaisColeta.map(localColeta => {
            
            return (
               <div key={localColeta.id} className="listaLocais container">
                  <p>{localColeta.nomeLocal} - {localColeta.bairro} - {localColeta.cidade}</p>
                  <div>
                     {
                        localColeta.residuos && localColeta.residuos.map((residuo,index)=>{
                           return(
                              <span key={`${localColeta.id}-${residuo}`}>{residuo} {(localColeta.residuos.length - 1) !== index ? " | " : ""}</span>
                           )
                        })
                     }
                  </div>
                  {
                     pageFrom !== "dashboard" && (
                        <div className="iconsAcao">
                           <ModalForm form="local" dado={localColeta} acao="editar" id={localColeta.id}/>
                           <Button onClick={() => {deletaLocal(localColeta.id)}}><img src="./src/assets/lixeira.png" alt="" /></Button>
                        </div>
                     )
                  }
               </div>
            )
         })
      }
      
    </>
   )
  }

export default ListaLocaisColeta;