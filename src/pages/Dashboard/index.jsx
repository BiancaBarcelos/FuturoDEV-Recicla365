import "../../index.css"
import "./style.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListaLocaisColeta from "../../components/ListaLocaisColeta";
import CardDashboard from "../../components/CardDashboard";

function Dashboard() {

  
   return(
     <div className="dashboard">
      <Header/>
      <section className="sessao container">
        <div className="colunaLista">
          <ListaLocaisColeta pageFrom="dashboard"/>
        </div>
        <div className="colunaCard">
          <CardDashboard/>
        </div>
      </section>
      <Footer/>
     </div>
   )
  }

export default Dashboard;