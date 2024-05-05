import "../../index.css"
import "./style.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListaUsuarios from "../../components/ListaUsuarios";

function ListagemUsuarios() {

  
   return(
     <div className="locaisColeta">
      <Header/>
      <section className="lista container">
        <div>
          <h2 className="tituloPage">Usuários Cadastrados</h2>
          <ListaUsuarios/>
        </div>
      </section>
      <Footer/>
     </div>
   )
  }

export default ListagemUsuarios;