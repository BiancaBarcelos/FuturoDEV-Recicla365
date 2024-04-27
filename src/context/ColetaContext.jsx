import {createContext, useState, useEffect} from 'react'

export const ColetaContext = createContext();

export const ColetaContextProvider = ({children}) => {
    

 
    return (
        <ColetaContext.Provider value={{}}>
            {children}
        </ColetaContext.Provider>
    )
}