import {Outlet} from "react-router-dom"
import './App.css'
import Header from './components/Header'


function App() {

  return (
    <>
      <Header/>
      <h1>Oiee</h1>
      <Outlet/>
    </>
  )
}

export default App
