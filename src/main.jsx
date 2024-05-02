import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import rotas from './router/Routers.jsx'
import { UsuariosContextProvider } from './context/UsuariosContext.jsx'
import { LocaisColetaContextProvider } from './context/LocaisColetaContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(

        <UsuariosContextProvider>
                <LocaisColetaContextProvider>
                        <RouterProvider router={rotas}>

                        </RouterProvider>
                </LocaisColetaContextProvider>
        </UsuariosContextProvider>
)
