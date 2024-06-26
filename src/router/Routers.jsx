import {createBrowserRouter, Navigate} from 'react-router-dom'

import App from '../App'
import Login from "../pages/Login"
import CadastroUsuarios from "../pages/CadastroUsuarios"
import Dashboard from "../pages/Dashboard"
import CadastroLocaisColeta from "../pages/CadastroLocaisColeta"
import ListagemLocais from "../pages/ListagemLocais"
import ListagemUsuarios from '../pages/ListagemUsuarios'

let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false

console.log(isAutenticado)
const PrivateRoute = ({children}) => {
  return isAutenticado ? children : <Navigate to="/login" />
}

const rotas = createBrowserRouter([
   
    {
        path:"/login",
        element: <Login />,
    },
    {
        path:"/cadastroUsuarios", 
        element: <CadastroUsuarios />,
    },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <App/>
            </PrivateRoute>
        ),
        children: [
        {
            path:"/dashboard",
            element: <Dashboard />,
        },
        {
            path:"/cadastrolocais", 
            element: <CadastroLocaisColeta />,
        },
        {
            path:"/locais", 
            element: <ListagemLocais />,
        },
        {
            path:"/listagemUsuarios", 
            element: <ListagemUsuarios />,
        }   
    ]
   }
])

export default rotas;