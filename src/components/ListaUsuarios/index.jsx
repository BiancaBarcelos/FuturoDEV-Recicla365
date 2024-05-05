import { Link } from "react-router-dom";
import "../../index.css"
import "./style.css"
import { useContext } from "react";
import { UsuariosContext } from "../../context/UsuariosContext";
import ModalForm from "../ModalForm";
import { Button } from "@mui/material";

function ListaUsuarios() {

   const {usuarios, removerUsuario} = useContext(UsuariosContext)

   const deletaUsuario = async(usuario)=>{
      await removerUsuario(usuario)
    }

   return(
    <div>
      {
         usuarios.map(usuario => {
            
            return (
               <div key={usuario.id} className="listaLocais container">
                  <p>{usuario.nome} - {usuario.cidade}</p>
                  
                  <div className="iconsAcao">
                     <ModalForm form="usuario" dado={usuario} acao="editar" id={usuario.id}/>
                     <Button onClick={() => {deletaUsuario(usuario.id)}}><img src="./src/assets/lixeira.png" alt="" /></Button>

                  </div>
               </div>
            )
         })
      }
      
    </div>
   )
  }

export default ListaUsuarios;