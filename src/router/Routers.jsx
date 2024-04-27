import {createBrowserRouter} from 'react-router-dom'

import App from '../App'
import Login from "../pages/Login"
import CadastroUsuarios from "../pages/CadastroUsuarios"
import Dashboard from "../pages/Dashboad"
import CadastroLocaisColeta from "../pages/CadastroLocaisColeta"
import ListagemLocais from "../pages/ListagemLocais"

let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false

const PrivateRoute = ({children}) => {
  return isAutenticado ? children : <Navigate to="/login" />
}

const routers = createBrowserRouter([
   
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
    errorElement: <div>Erro ao Carregar</div>,
    children: [
        {
            path:"/",
            element: <Dashboard />,
        },
        {
            path:"/cadastrolocais", 
            element: <CadastroLocaisColeta />,
        },
        {
            path:"/locais", 
            element: <ListagemLocais />,
        }    
    ]
   }
])

export default routers;