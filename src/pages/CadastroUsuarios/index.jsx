import "../../index.css"
import "./style.css"

import 'dayjs/locale/en-gb';
import Footer from "../../components/Footer";
import FormUsuario from "../../components/FormUsuario";

 
function CadastroUsuarios() {
 
   return(

     <div className="divisaoPage">
      <div className="colunaForm">
        <img src="./src/assets/logo_recicla.svg" alt="" />
        <FormUsuario acao="cadastrar"/>
        <Footer/>
      </div>
      <div className="colunaImgCadastroUsuario">
        <img src="./src/assets/bg_login.png" alt="" />
      </div>
     </div>
   )
  }

export default CadastroUsuarios;