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
          <ListaLocaisColeta/>
          <ListaLocaisColeta/>
        </div>
      </section>
      <Footer/>
     </div>
   )
  }

export default ListagemLocais;