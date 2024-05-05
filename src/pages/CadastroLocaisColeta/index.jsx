import "../../index.css"
import "./style.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormLocal from "../../components/FormLocal";


function CadastroLocaisColeta() {

  const id = localStorage.getItem("idUsuario")
  
   return(
     <div className="cadastroLocais">
      <Header/>
      <section className="sessaoCadastro container">
        <FormLocal acao="cadastrar" id={id}/>
      </section>
      <Footer/>
     </div>
   )
  }

export default CadastroLocaisColeta;