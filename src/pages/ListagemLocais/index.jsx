import "../../index.css"
import "./style.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListaLocaisColeta from "../../components/ListaLocaisColeta";

function ListagemLocais() {

  
   return(
     <div className="locaisColeta">
      <Header/>
      <section className="lista container">
        <div>
          <h2 className="tituloPage">Locais de Coleta</h2>
          <ListaLocaisColeta/>
        </div>
      </section>
      <Footer/>
     </div>
   )
  }

export default ListagemLocais;